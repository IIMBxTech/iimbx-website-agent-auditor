# Krishitek Website Architecture & Archive Report

## Overview
This document outlines the architecture of the Krishitek static website prototype, including the variant management system, localization strategy, and the archived pages.

## Architecture

1. **Static HTML/CSS/JS (Vanilla)**
   - The site uses plain HTML, CSS (in `<style>` blocks for single-file portability), and Vanilla JavaScript. 
   - *Why?* Maximum performance, zero build-step overhead for deployment, and easy distribution for prototyping. No heavy frontend frameworks (like React/Angular) are needed for purely presentational pages.

2. **Client-Side Localization (`/assets/i18n.js`)**
   - Text translations are handled entirely in the browser using a lightweight JSON dictionary (`/assets/translations.json`) and `data-i18n` attributes on HTML elements.
   - *Why?* Avoids maintaining multiple physical copies of the same HTML file for different languages. A single script swaps the text based on the selected language, storing the preference in `localStorage`.

3. **Supabase Integration (Dashboards)**
   - The `/variants/master_dashboard.html` and other admin panels use the Supabase JS client for authentication and mock data management.
   - *Why?* Provides a serverless backend for secure login and data handling without needing a custom Node.js/Python server.

## Archive Log (`/variants/archive/`)

As part of the iterative design process, older versions of pages have been moved to the `archive` directory. This keeps the main `variants` folder clean while retaining a history of previous design explorations.

| Archived File | Description | Reason for Archiving |
| --- | --- | --- |
| `blog_v2_stitch.html` | Old blog layout | Replaced by streamlined `v1` |
| `contact_v1.html` | Initial contact page design | Superseded by `v2_stitch` with better map integration |
| `homepage_v1.html` | First iteration homepage | Outdated design |
| `homepage_v2_stitch.html` | Second iteration homepage | Outdated design |
| `homepage_v3_stitch.html` | Third iteration homepage | Replaced by `v4_stitch` and `v5_special` |
| `product_catalog_v2_stitch.html` | Old product catalog | Replaced by refined `v1` |
| `productpage_v2_stitch.html` | Old single product layout | Consolidated into `v1` |
| `services_v2_stitch.html` | Old services page | Replaced by refined `v1` |
| `spare_parts_v2_stitch.html` | Old spare parts layout | Replaced by refined `v1` |

## Summary
The current architecture follows a strictly "Vanilla first" approach. This keeps the codebase minimal, easily auditable, and extremely fast to load, fulfilling the requirements for a modern yet lightweight agricultural machinery website.
