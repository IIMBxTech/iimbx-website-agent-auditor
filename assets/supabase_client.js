/**
 * Krishtech Supabase Client Helper
 * Connects the frontend & master admin dashboard directly to Supabase.
 */

(function (window) {
    // Config values (Replace with actual Supabase credentials when deploying)
    const SUPABASE_URL = window.KRISHTECH_SUPABASE_URL || 'https://YOUR_PROJECT_REF.supabase.co';
    const SUPABASE_ANON_KEY = window.KRISHTECH_SUPABASE_ANON_KEY || 'YOUR_ANON_KEY';

    let supabaseClient = null;

    function getClient() {
        if (supabaseClient) return supabaseClient;
        if (window.supabase) {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            return supabaseClient;
        } else {
            console.warn('Supabase JS SDK not loaded on window. Ensure CDN script is included.');
            return null;
        }
    }

    const KrishtechDB = {
        // Expose supabase client directly for Auth calls
        get supabase() { return getClient(); },

        // --- Auth Guard ---
        async requireAuth(allowedRoles = []) {
            // Mock auth bypass for Design Dashboard previews
            const mockRole = sessionStorage.getItem('mock_role');
            if (mockRole) {
                if (allowedRoles.length > 0 && !allowedRoles.includes(mockRole)) {
                    document.body.innerHTML = '<h1>403 - Unauthorized. Insufficient role permissions.</h1>';
                    return null;
                }
                // Mock permissions for employee
                let mockPermissions = {};
                if (mockRole === 'employee') {
                    mockPermissions = { edit_content: true, upload_media: true, manage_blog: true, view_logs: true };
                }
                return { session: { user: { id: 'mock-user' } }, role: mockRole, permissions: mockPermissions };
            }

            const client = getClient();
            if (!client) return null;
            
            const { data: { session }, error } = await client.auth.getSession();
            if (error || !session) {
                window.location.href = 'dealer_login.html';
                return null;
            }

            // Fetch profile for role and permissions
            const { data: profile } = await client
                .from('profiles')
                .select('role, permissions, full_name, dealer_id')
                .eq('user_id', session.user.id)
                .single();
            
            if (!profile || (allowedRoles.length > 0 && !allowedRoles.includes(profile.role))) {
                // Unauthorized
                document.body.innerHTML = '<h1>403 - Unauthorized. Insufficient role permissions.</h1>';
                return null;
            }
            return { session, profile, role: profile.role, permissions: profile.permissions };
        },

        // --- Content Blocks (Translations) ---
        async fetchTranslations(lang = 'en') {
            const client = getClient();
            if (!client) return null;
            try {
                const { data, error } = await client
                    .from('content_blocks')
                    .select(`section_key, content`)
                    .eq('language', lang);
                if (error) throw error;

                const dict = {};
                (data || []).forEach(row => {
                    if (row.section_key) dict[row.section_key] = row.content || '';
                });
                return dict;
            } catch (err) {
                console.error('Supabase fetchTranslations error:', err);
                return null;
            }
        },

        async upsertTranslation(pageKey, sectionKey, language, content) {
            const client = getClient();
            if (!client) return false;
            try {
                const payload = { page_key: pageKey, section_key: sectionKey, language: language, content: content, updated_at: new Date() };
                const { error } = await client.from('content_blocks').upsert(payload, { onConflict: 'page_key,section_key,language' });
                if (error) throw error;
                return true;
            } catch (err) {
                console.error('Supabase upsertTranslation error:', err);
                return false;
            }
        },

        // --- Page Blocks (Structural Layout) ---
        async fetchPageBlocks(pageKey) {
            const client = getClient();
            if (!client) return [];
            try {
                const { data, error } = await client
                    .from('page_blocks')
                    .select('*')
                    .eq('page_key', pageKey)
                    .order('position', { ascending: true });
                if (error) throw error;
                return data || [];
            } catch (err) {
                console.error('Supabase fetchPageBlocks error:', err);
                return [];
            }
        },

        async upsertPageBlock(pageKey, blockKey, blockType, position, contentObj) {
            const client = getClient();
            if (!client) return false;
            try {
                const payload = { 
                    page_key: pageKey, 
                    block_key: blockKey, 
                    block_type: blockType, 
                    position: position, 
                    content: contentObj, 
                    updated_at: new Date() 
                };
                const { error } = await client.from('page_blocks').upsert(payload, { onConflict: 'page_key,block_key' });
                if (error) throw error;
                return true;
            } catch (err) {
                console.error('Supabase upsertPageBlock error:', err);
                return false;
            }
        },

        // --- Media Assets ---
        async addMediaAsset(mediaData) {
            const client = getClient();
            if (!client) return false;
            try {
                const { error } = await client.from('media_assets').insert([mediaData]);
                if (error) throw error;
                return true;
            } catch (err) {
                console.error('Supabase addMediaAsset error:', err);
                return false;
            }
        },

        async fetchMediaAssets(typeFilter = null) {
            const client = getClient();
            if (!client) return [];
            try {
                let query = client.from('media_assets').select('*').order('uploaded_at', { ascending: false });
                if (typeFilter) query = query.eq('type', typeFilter);
                const { data, error } = await query;
                if (error) throw error;
                return data || [];
            } catch (err) {
                console.error('Supabase fetchMediaAssets error:', err);
                return [];
            }
        },

        // --- Blog Posts ---
        async fetchBlogPosts() {
            const client = getClient();
            if (!client) return [];
            try {
                const { data, error } = await client
                    .from('blog_posts')
                    .select(`*, media_assets(*)`)
                    .order('pinned', { ascending: false })
                    .order('position', { ascending: true })
                    .order('created_at', { ascending: false });
                if (error) throw error;
                return data || [];
            } catch (err) {
                console.error('Supabase fetchBlogPosts error:', err);
                return [];
            }
        },

        // --- Dealer Leads ---
        async submitDealerLead(leadData) {
            const client = getClient();
            if (!client) return false;
            try {
                const { error } = await client.from('dealer_leads').insert([leadData]);
                if (error) throw error;
                return true;
            } catch (err) {
                console.error('Supabase submitDealerLead error:', err);
                return false;
            }
        },

        async fetchDealerLeads() {
            const client = getClient();
            if (!client) return [];
            try {
                const { data, error } = await client
                    .from('dealer_leads')
                    .select('*')
                    .order('created_at', { ascending: false });
                if (error) throw error;
                return data || [];
            } catch (err) {
                console.error('Supabase fetchDealerLeads error:', err);
                return [];
            }
        },

        exportLeadsToCSV(leadsArray) {
            if (!leadsArray || !leadsArray.length) {
                alert('No lead data available to export.');
                return;
            }
            const headers = Object.keys(leadsArray[0]).join(',');
            const rows = leadsArray.map(row => 
                Object.values(row).map(val => `"${String(val || '').replace(/"/g, '""')}"`).join(',')
            );
            const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join('\n');
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `krishtech_dealer_leads_${new Date().toISOString().slice(0,10)}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

        // --- Audit & Login Logs ---
        async fetchAuditLogs() {
            const client = getClient();
            if (!client) return [];
            try {
                const { data, error } = await client
                    .from('audit_log')
                    .select('*')
                    .order('changed_at', { ascending: false })
                    .limit(100);
                if (error) throw error;
                return data || [];
            } catch (err) {
                console.error('Supabase fetchAuditLogs error:', err);
                return [];
            }
        },
        
        async fetchLoginEvents() {
            const client = getClient();
            if (!client) return [];
            try {
                const { data, error } = await client
                    .from('login_events')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(100);
                if (error) throw error;
                return data || [];
            } catch (err) {
                console.error('Supabase fetchLoginEvents error:', err);
                return [];
            }
        }
    };

    window.KrishtechDB = KrishtechDB;
})(window);
