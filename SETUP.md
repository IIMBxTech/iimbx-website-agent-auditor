# IIMBx Audit Swarm — Setup & Handoff Guide

Welcome to the IIMBx Audit Swarm environment! If you have inherited this folder, follow this setup guide immediately to ensure the multi-agent system operates efficiently and accurately.

## 1. System Requirements & Dependencies

To guarantee the agent swarm can analyze web data, fetch content, and structure designs, the following MCPs (Model Context Protocols) **MUST** be enabled in your Antigravity environment:
- **Exa MCP:** Required for Agents 01 and 02 to fetch live content, resolve dead links, and conduct deep web searches on IIMBx properties.
- **Stitch MCP:** Required by the Builder agents to manage design systems, layout screens, and generate valid prototypes.

*If you do not have these enabled, please ask your system administrator to install them before running any audit commands.*

## 2. Model Constraint

> [!WARNING]  
> **Model Lockdown: Gemini 3.1 Pro**
> All design and prototyping for the `v1`, `v2`, and `v3` HTML files was done using the **Gemini 3.1 Pro** model. To maintain consistency, high-quality reasoning, and adherence to our specific design tokens, you must strictly use the Gemini 3.1 Pro model in Antigravity when interacting with this workspace.

## 3. Agent Workflow Overview

This folder is run by a Swarm of 20 Agents, led by the **Coordinator Agent (00)**.
- **Gatherers (Layer 2):** Scrape the old site and current prototypes.
- **Analyzers (Layer 3):** Cross-check colours, typography, SEO, accessibility, and content completeness.
- **Synthesizers (Layer 4):** Generate reports and interactive dashboards.
- **Builders (Layer 5):** Re-write the HTML/CSS code directly, actively optimizing for performance ("lightness") and brand compliance.

## 4. Manager Context & Logging

Context loss is the biggest risk in agent handoffs. 
- The Manager Agent (the primary orchestrator) is tasked with maintaining `MANAGER_LOG.md`.
- **Your Responsibility:** Check `MANAGER_LOG.md` frequently. It contains a visual flowchart of our progress and a table of active rules.
- **Overrides:** If you ask the agent to do something that violates a rule established in `MANAGER_LOG.md`, the Manager Agent is programmed to stop and warn you. You must explicitly confirm the override to proceed, and the agent will document the codebase impact in the log.

## Next Steps
Open `AGENTS.md` to review the brand guidelines and programme data, then open `dashboard/index.html` in your browser to view the current audit status.
