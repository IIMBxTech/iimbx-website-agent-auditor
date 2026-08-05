-- ====================================================================
-- KRISHTECH SUPABASE DATABASE SCHEMA & SECURITY POLICIES
-- Target Stack: Supabase (Auth, Postgres, Storage)
-- ====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- --------------------------------------------------------------------
-- 1. PROFILES (Extends auth.users)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('director', 'employee', 'dealer')),
    dealer_id UUID,
    permissions JSONB DEFAULT '{}'::jsonb,
    full_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Helper Functions for Role Checking
CREATE OR REPLACE FUNCTION public.is_director() RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'director');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.get_user_role() RETURNS TEXT AS $$
DECLARE
    u_role TEXT;
BEGIN
    SELECT role INTO u_role FROM public.profiles WHERE user_id = auth.uid();
    RETURN u_role;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.has_permission(perm_key TEXT) RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE user_id = auth.uid() 
          AND role = 'employee' 
          AND (permissions->>perm_key)::boolean = true
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles RLS
CREATE POLICY "Director Full Access Profiles" ON public.profiles FOR ALL USING (public.is_director());
CREATE POLICY "Users Can Read Own Profile" ON public.profiles FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users Can Update Own Profile" ON public.profiles FOR UPDATE USING (user_id = auth.uid());

-- --------------------------------------------------------------------
-- 2. MEDIA ASSETS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.media_assets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type TEXT NOT NULL CHECK (type IN ('image', 'video', 'youtube')),
    storage_path TEXT,
    external_url TEXT,
    caption TEXT,
    uploaded_by UUID REFERENCES auth.users(id),
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Media" ON public.media_assets FOR SELECT USING (true);
CREATE POLICY "Director Manage Media" ON public.media_assets FOR ALL USING (public.is_director());
CREATE POLICY "Employee Manage Media" ON public.media_assets FOR ALL USING (public.has_permission('upload_media'));

-- --------------------------------------------------------------------
-- 3. PAGE BLOCKS (Structure + Layout Control)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.page_blocks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_key TEXT NOT NULL,
    block_key TEXT NOT NULL,
    block_type TEXT NOT NULL CHECK (block_type IN ('text', 'image', 'video', 'youtube')),
    position INT DEFAULT 0,
    content JSONB DEFAULT '{}'::jsonb,
    updated_by UUID REFERENCES auth.users(id),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(page_key, block_key)
);

ALTER TABLE public.page_blocks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Page Blocks" ON public.page_blocks FOR SELECT USING (true);
CREATE POLICY "Director Manage Page Blocks" ON public.page_blocks FOR ALL USING (public.is_director());
CREATE POLICY "Employee Manage Page Blocks" ON public.page_blocks FOR ALL USING (public.has_permission('edit_content'));

-- --------------------------------------------------------------------
-- 4. CONTENT BLOCKS (Multilingual Text)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.content_blocks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_key TEXT NOT NULL,
    section_key TEXT NOT NULL,
    language TEXT NOT NULL,
    content TEXT,
    updated_by UUID REFERENCES auth.users(id),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(page_key, section_key, language)
);

ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Content Blocks" ON public.content_blocks FOR SELECT USING (true);
CREATE POLICY "Director Manage Content Blocks" ON public.content_blocks FOR ALL USING (public.is_director());
CREATE POLICY "Employee Manage Content Blocks" ON public.content_blocks FOR ALL USING (public.has_permission('edit_content'));

-- --------------------------------------------------------------------
-- 5. BLOG POSTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    cover_media_id UUID REFERENCES public.media_assets(id) ON DELETE SET NULL,
    slug TEXT UNIQUE NOT NULL,
    position INT DEFAULT 0,
    pinned BOOLEAN DEFAULT false,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMPTZ,
    updated_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Published Blogs" ON public.blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Director Manage Blogs" ON public.blog_posts FOR ALL USING (public.is_director());
CREATE POLICY "Employee Manage Blogs" ON public.blog_posts FOR ALL USING (public.has_permission('manage_blog'));

-- --------------------------------------------------------------------
-- 6. DEALER LEADS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.dealer_leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    dealer_id UUID, -- Assigned dealer
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    state TEXT,
    district TEXT,
    machine_interest TEXT,
    notes TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.dealer_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Insert Dealer Leads" ON public.dealer_leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Director Full Access Leads" ON public.dealer_leads FOR ALL USING (public.is_director());
CREATE POLICY "Dealer Read Own Leads" ON public.dealer_leads FOR SELECT USING (
    dealer_id = (SELECT p.dealer_id FROM public.profiles p WHERE p.user_id = auth.uid())
);
CREATE POLICY "Dealer Update Own Leads" ON public.dealer_leads FOR UPDATE USING (
    dealer_id = (SELECT p.dealer_id FROM public.profiles p WHERE p.user_id = auth.uid())
);

-- --------------------------------------------------------------------
-- 7. AUDIT LOG (Triggers)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    table_name TEXT NOT NULL,
    record_id UUID,
    action TEXT NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
    old_value JSONB,
    new_value JSONB,
    changed_by UUID REFERENCES auth.users(id),
    changed_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Director Read Audit Log" ON public.audit_log FOR SELECT USING (public.is_director());
CREATE POLICY "Employee Read Audit Log" ON public.audit_log FOR SELECT USING (public.has_permission('view_logs'));

CREATE OR REPLACE FUNCTION public.log_audit_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        INSERT INTO public.audit_log (table_name, record_id, action, old_value, changed_by)
        VALUES (TG_TABLE_NAME, OLD.id, 'DELETE', to_jsonb(OLD), auth.uid());
        RETURN OLD;
    ELSIF (TG_OP = 'UPDATE') THEN
        INSERT INTO public.audit_log (table_name, record_id, action, old_value, new_value, changed_by)
        VALUES (TG_TABLE_NAME, NEW.id, 'UPDATE', to_jsonb(OLD), to_jsonb(NEW), auth.uid());
        RETURN NEW;
    ELSIF (TG_OP = 'INSERT') THEN
        INSERT INTO public.audit_log (table_name, record_id, action, new_value, changed_by)
        VALUES (TG_TABLE_NAME, NEW.id, 'INSERT', to_jsonb(NEW), auth.uid());
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Attach Triggers
CREATE TRIGGER audit_profiles AFTER INSERT OR UPDATE OR DELETE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.log_audit_trigger();
CREATE TRIGGER audit_page_blocks AFTER INSERT OR UPDATE OR DELETE ON public.page_blocks FOR EACH ROW EXECUTE FUNCTION public.log_audit_trigger();
CREATE TRIGGER audit_content_blocks AFTER INSERT OR UPDATE OR DELETE ON public.content_blocks FOR EACH ROW EXECUTE FUNCTION public.log_audit_trigger();
CREATE TRIGGER audit_media_assets AFTER INSERT OR UPDATE OR DELETE ON public.media_assets FOR EACH ROW EXECUTE FUNCTION public.log_audit_trigger();
CREATE TRIGGER audit_blog_posts AFTER INSERT OR UPDATE OR DELETE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.log_audit_trigger();

-- --------------------------------------------------------------------
-- 8. LOGIN EVENTS
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.login_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id),
    ip TEXT,
    device TEXT,
    event TEXT CHECK (event IN ('sign_in', 'sign_out', 'failed_attempt')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.login_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Director Read Login Events" ON public.login_events FOR SELECT USING (public.is_director());
CREATE POLICY "Employee Read Login Events" ON public.login_events FOR SELECT USING (public.has_permission('view_logs'));

-- Note: Webhooks or edge functions handle populating login_events upon auth success/failure.
