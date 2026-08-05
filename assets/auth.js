/**
 * Krishitek Auth Helper
 * localStorage mock — Supabase-ready. Swap getClient() call to go live.
 */
(function(window) {
    // Demo credentials — replace with Supabase auth when keys are available
    const DEMO_USERS = {
        'md@krishitek.com':      { password: 'Krishi@MD2025',    role: 'md',       name: 'Managing Director' },
        'dealer@krishitek.com':  { password: 'Krishi@Dealer25',  role: 'dealer',   name: 'Rajesh Sharma (Dealer)' },
        'emp@krishitek.com':     { password: 'Krishi@Emp2025',   role: 'employee', name: 'Priya Verma (Employee)' }
    };

    const ROLE_REDIRECTS = {
        md:       '../variants/md_dashboard.html',
        dealer:   '../variants/dealer_dashboard.html',
        employee: '../variants/employee_portal.html'
    };

    const KrishiAuth = {
        login(email, password) {
            const user = DEMO_USERS[email.toLowerCase()];
            if (!user || user.password !== password) {
                return { success: false, error: 'Invalid email or password.' };
            }
            const session = { email, role: user.role, name: user.name, loginAt: Date.now() };
            localStorage.setItem('krishi_session', JSON.stringify(session));
            sessionStorage.setItem('mock_role', user.role); // Supabase client compat
            return { success: true, role: user.role, redirect: ROLE_REDIRECTS[user.role] };
        },

        logout() {
            localStorage.removeItem('krishi_session');
            sessionStorage.removeItem('mock_role');
            window.location.href = '../variants/login.html';
        },

        getSession() {
            try {
                const raw = localStorage.getItem('krishi_session');
                return raw ? JSON.parse(raw) : null;
            } catch { return null; }
        },

        getRole() {
            const s = this.getSession();
            return s ? s.role : null;
        },

        getName() {
            const s = this.getSession();
            return s ? s.name : 'User';
        },

        // Call at top of any protected page
        requireRole(allowed) {
            const role = this.getRole();
            const allowedArr = Array.isArray(allowed) ? allowed : [allowed];
            if (!role || !allowedArr.includes(role)) {
                window.location.href = '../variants/login.html';
                return false;
            }
            return true;
        },

        // Save dealer application lead to localStorage (viewable by MD)
        saveDealerLead(formData) {
            const leads = JSON.parse(localStorage.getItem('krishi_dealer_leads') || '[]');
            leads.unshift({ ...formData, id: Date.now(), submittedAt: new Date().toISOString(), status: 'new' });
            localStorage.setItem('krishi_dealer_leads', JSON.stringify(leads));
        },

        getDealerLeads() {
            return JSON.parse(localStorage.getItem('krishi_dealer_leads') || '[]');
        }
    };

    window.KrishiAuth = KrishiAuth;
})(window);
