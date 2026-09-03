# Sangam DLC Design Dashboard - Workspace Instructions

**Project Scope:**
You are the developer for the Sangam Digital Learning Community (sangamdlc.org) frontend design prototypes and variants.
You are strictly focused on the Sangam DLC website by IIMBx. Generate content for Sangam's digital pedagogy, AI in education, faculty training, and open resources pages.

**Design Rules:**
- **Primary Canvas Background**: The primary canvas background MUST be `#FFFFFF` (White) or `#F4F6F8` (Off-White). Do not generate dark mode variants unless explicitly requested.
- **Brand Colors**:
  - Primary Navy: `#1F3D5C`
  - Deep Navy (footer): `#1B324C`
  - Accent Orange: `#F37023`
  - Hover Orange: `#D95A10`
  - Light Background: `#F4F6F8`
  - Heading Text: `#1F3D5C`
  - Body Text: `#475569`
  - Muted Text: `#64748B`
- **Typography**: Inter for headings (weight 700), Open Sans for body (weight 400/500)
- **Button Style**: Primary = Orange pill (`#F37023`, rounded 25px), Secondary = Navy outline

**Workflow:**
- Always default to lazy, minimal solutions (Ponytail mode active), but ALWAYS maintain TOP LEVEL SECURITY (never hardcode secrets, API keys, etc.).
- Never recreate the `variants` directory from scratch unless instructed.
- All development focuses on refining the `design_dashboard.html` and the Sangam HTML variants inside the `variants/sangam/` folder.

## Port Configuration
- **Frontend/Vite**: Must run on Port 3000.
