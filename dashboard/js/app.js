document.addEventListener('DOMContentLoaded', () => {
  const data = window.AUDIT_DATA || [];
  
  const grid = document.getElementById('programme-grid');
  const sidebarNav = document.getElementById('sidebar-nav');
  
  const modal = document.getElementById('audit-modal');
  const modalClose = document.getElementById('close-modal');
  const modalBack = document.getElementById('modal-back');
  const modalHeader = document.getElementById('modal-header-content');
  const modalTabs = document.getElementById('modal-tabs');
  const modalBody = document.getElementById('modal-body');
  
  const wfViewer = document.getElementById('wf-viewer');
  const wfClose = document.getElementById('wf-close');
  const wfBack = document.getElementById('wf-back');
  const wfTitle = document.getElementById('wf-title');
  const wfSourceTabs = document.getElementById('wf-source-tabs');
  const wfActions = document.getElementById('wf-actions');
  const wfPaneLeft = document.getElementById('wf-pane-left');
  const wfPaneMiddle = document.getElementById('wf-pane-middle');
  const wfPaneRight = document.getElementById('wf-pane-right');
  const wfLabelLeft = document.getElementById('wf-label-left');
  const wfLabelMiddle = document.getElementById('wf-label-middle');
  const wfLabelRight = document.getElementById('wf-label-right');
  
  let currentProgramme = null;
  let currentWfLeft = 'oldSite';
  let currentWfMiddle = 'marketingHtml';
  let currentWfRight = 'proposedV1';
  let currentViewMode = 'ascii';
  
  // Render Grid
  function renderGrid() {
    grid.innerHTML = '';
    sidebarNav.innerHTML = '';
    
    data.forEach(prog => {
      // Sidebar item
      const sItem = document.createElement('div');
      sItem.className = 'sidebar-item';
      sItem.innerHTML = `
        <div class="sidebar-item-content">
          <span class="dot"></span>${prog.shortName}
        </div>
        <div class="sidebar-item-actions">
          <button class="action-btn audit-btn">Audit Details</button>
          <button class="action-btn wf-btn">Check Wireframes</button>
        </div>
      `;
      
      const auditBtn = sItem.querySelector('.audit-btn');
      const wfBtn = sItem.querySelector('.wf-btn');
      
      auditBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(prog);
      });
      
      wfBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openWfViewer(prog);
      });
      
      sItem.addEventListener('click', () => openModal(prog));
      sidebarNav.appendChild(sItem);
      
      // Card
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="title">${prog.programmeName}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;">${prog.file}</div>
        ${prog.file === 'Not provided' ? '<div style="font-size: 0.9rem; font-style: italic; color: var(--text-muted);">No audit data (prototypes only)</div>' : `
        <div>Brand: ${prog.scores.brand}% | Content: ${prog.scores.content}% | UX: ${prog.scores.ux}%</div>
        <div class="scores">
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.brand}%; background:var(--success)"></div></div>
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.content}%; background:var(--warning)"></div></div>
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.ux}%; background:var(--accent)"></div></div>
        </div>
        `}
      `;
      card.addEventListener('click', () => openModal(prog));
      grid.appendChild(card);
    });
  }
  
  // History State Management
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.view === 'wf') {
      modal.style.display = 'flex';
      wfViewer.style.display = 'flex';
    } else if (e.state && e.state.view === 'modal') {
      modal.style.display = 'flex';
      wfViewer.style.display = 'none';
    } else {
      modal.style.display = 'none';
      wfViewer.style.display = 'none';
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (wfViewer.style.display === 'flex') {
        history.back();
      } else if (modal.style.display === 'flex') {
        history.back();
      }
    }
  });

  // Open Modal
  function openModal(prog) {
    currentProgramme = prog;
    modal.style.display = 'flex';
    history.pushState({ view: 'modal' }, '', '#audit');
    modalHeader.innerHTML = `<h2>${prog.programmeName}</h2><p>Audit Results for ${prog.file}</p>`;
    
    // Setup Tabs
    modalTabs.innerHTML = `
      <div class="modal-tab active" data-tab="summary">Summary</div>
      <div class="modal-tab" data-tab="gaps">Gap Analysis</div>
      <div class="modal-tab" data-tab="brand">Brand Compliance</div>
      <div class="modal-tab" data-tab="wireframes">Wireframes</div>
    `;
    
    document.querySelectorAll('.modal-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        renderTabContent(e.target.dataset.tab, prog);
      });
    });
    
    renderTabContent('summary', prog);
  }
  
  // Render Tab Content
  function renderTabContent(tab, prog) {
    let html = '';
    if (tab === 'summary') {
      html = `
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div>
            <p><strong>Summary:</strong> ${prog.summary}</p>
            <p><strong>Old Site:</strong> ${prog.oldSiteUrl !== '—' ? `<a href="${prog.oldSiteUrl}" target="_blank">${prog.oldSiteUrl}</a>` : '—'}</p>
            <p><strong>${prog.id === 'elp' ? 'v2' : 'v1'} Staging:</strong> ${prog.v1StagingUrl !== '—' ? `<a href="${prog.v1StagingUrl}" target="_blank">${prog.v1StagingUrl}</a>` : '—'}</p>
            <p><strong>Audit Date:</strong> ${prog.auditDate}</p>
          </div>
          <button id="summary-open-wf-viewer" style="background: var(--accent); color: white; padding: 10px 20px; border: none; border-radius: var(--radius); cursor: pointer; font-family: 'Inter', sans-serif; white-space: nowrap; margin-left: 20px;">Compare Wireframes</button>
        </div>
        <h3>Action Items</h3>
        <ul>
          ${prog.actionItems.map(a => `<li><b>${a.priority.toUpperCase()}</b>: ${a.task}</li>`).join('')}
        </ul>
      `;
    } else if (tab === 'gaps') {
      html = `
        <table style="width: 100%; text-align: left; border-collapse: collapse;">
          <tr style="background: var(--bg-dark); color: var(--text-light);">
            <th style="padding: 10px; border: 1px solid var(--border);">Section</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Old Site</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Marketing HTML</th>
            <th style="padding: 10px; border: 1px solid var(--border);">${prog.id === 'elp' ? 'v2' : 'v1'} Staging</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Severity</th>
          </tr>
          ${prog.contentGaps.map(g => `
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">${g.section}</td>
              <td style="padding: 10px; border: 1px solid var(--border);">${g.oldSite.detail}</td>
              <td style="padding: 10px; border: 1px solid var(--border); ${!g.marketingHtml.present ? 'color: red; font-weight: bold;' : ''}">${g.marketingHtml.detail}</td>
              <td style="padding: 10px; border: 1px solid var(--border);">${g.v1Staging.detail}</td>
              <td style="padding: 10px; border: 1px solid var(--border); color: ${g.severity === 'critical' ? 'red' : (g.severity === 'warning' ? 'orange' : 'green')}">${g.severity.toUpperCase()}</td>
            </tr>
          `).join('')}
        </table>
      `;
    } else if (tab === 'brand') {
      html = `
        <table style="width: 100%; text-align: left; border-collapse: collapse;">
          <tr style="background: var(--bg-dark); color: var(--text-light);">
            <th style="padding: 10px; border: 1px solid var(--border);">Rule</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Expected</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Actual</th>
            <th style="padding: 10px; border: 1px solid var(--border);">Status</th>
          </tr>
          ${prog.brandChecks.map(b => `
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border);">${b.rule}</td>
              <td style="padding: 10px; border: 1px solid var(--border);">${b.expected}</td>
              <td style="padding: 10px; border: 1px solid var(--border);">${b.actual}</td>
              <td style="padding: 10px; border: 1px solid var(--border); color: ${b.status === 'pass' ? 'green' : (b.status === 'warn' ? 'orange' : 'red')}">${b.status.toUpperCase()}</td>
            </tr>
          `).join('')}
        </table>
      `;
    } else if (tab === 'wireframes') {
      html = `
        <p>Click below to compare wireframes side by side and download them.</p>
        <button id="open-wf-viewer" style="background: var(--accent); color: white; padding: 10px 20px; border: none; border-radius: var(--radius); cursor: pointer; font-family: 'Inter', sans-serif;">Compare Wireframes</button>
        <h3 style="margin-top: 20px;">UX Suggestions</h3>
        <ul>
          ${prog.wireframes.suggestions.map(s => `<li><b>${s.title}</b>: ${s.description} (Effort: ${s.effort}, Impact: ${s.impact})</li>`).join('')}
        </ul>
      `;
    }
    modalBody.innerHTML = html;
    
    if (tab === 'wireframes') {
      document.getElementById('open-wf-viewer').addEventListener('click', () => {
        openWfViewer(prog);
      });
    }
    if (tab === 'summary') {
      const btn = document.getElementById('summary-open-wf-viewer');
      if (btn) {
        btn.addEventListener('click', () => {
          openWfViewer(prog);
        });
      }
    }
  }
  
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    history.replaceState(null, '', '#');
  });
  if (modalBack) {
    modalBack.addEventListener('click', () => {
      modal.style.display = 'none';
      history.replaceState(null, '', '#');
    });
  }
  
  // Wireframe Viewer
  function openWfViewer(prog) {
    currentProgramme = prog;
    wfViewer.style.display = 'flex';
    history.pushState({ view: 'wf' }, '', '#wireframes');
    wfTitle.textContent = `${prog.shortName} Wireframe Comparison`;
    
    // Set up source tabs
    const sources = [
      { id: 'oldSite', label: 'Old Website' },
      { id: 'marketingHtml', label: 'Marketing HTML' },
      { id: 'v1Staging', label: currentProgramme.id === 'elp' ? 'v2 Staging' : 'v1 Staging' },
      { id: 'proposedV1', label: 'Proposed Layout v1' },
      { id: 'proposedV2', label: 'Proposed Layout v2' },
      { id: 'proposedV3', label: 'Proposed Layout v3' }
    ];
    
    function renderActions() {
      wfActions.innerHTML = `
        <div style="background: var(--bg-darker); padding: 4px; border-radius: 6px; display: inline-flex; margin-right: 16px; border: 1px solid var(--border);">
          <button id="view-ascii" style="background: ${currentViewMode === 'ascii' ? 'var(--accent)' : 'transparent'}; color: ${currentViewMode === 'ascii' ? 'white' : 'var(--text-light)'}; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500;">ASCII Mode</button>
          <button id="view-html" style="background: ${currentViewMode === 'html' ? 'var(--accent)' : 'transparent'}; color: ${currentViewMode === 'html' ? 'white' : 'var(--text-light)'}; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500;">HTML Code</button>
        </div>
        <button id="preview-html" style="background: var(--accent); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; margin-right: 12px; font-weight: 500; font-size: 14px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" onmouseover="this.style.filter='brightness(1.1)'; this.style.transform='translateY(-1px)'" onmouseout="this.style.filter='none'; this.style.transform='none'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Preview HTML
        </button>
        ${currentViewMode === 'ascii' ? `
        <button id="dl-txt" style="background: #2D3748; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; margin-right: 12px; font-weight: 500; font-size: 14px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px;" onmouseover="this.style.background='#4A5568'; this.style.transform='translateY(-1px)'" onmouseout="this.style.background='#2D3748'; this.style.transform='none'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Export TXT
        </button>
        <button id="dl-png" style="background: #2D3748; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 14px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px;" onmouseover="this.style.background='#4A5568'; this.style.transform='translateY(-1px)'" onmouseout="this.style.background='#2D3748'; this.style.transform='none'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          Export PNG
        </button>
        ` : `
        <button id="dl-html" style="background: #2D3748; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 14px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 8px;" onmouseover="this.style.background='#4A5568'; this.style.transform='translateY(-1px)'" onmouseout="this.style.background='#2D3748'; this.style.transform='none'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download HTML Codes
        </button>
        `}
      `;

      document.getElementById('view-ascii').addEventListener('click', () => {
        currentViewMode = 'ascii';
        renderActions();
        updateWfViews();
      });
      document.getElementById('view-html').addEventListener('click', () => {
        currentViewMode = 'html';
        renderActions();
        updateWfViews();
      });
      
      
      document.getElementById('preview-html').addEventListener('click', () => {
        let fileUrl = '';
        if (prog.id === 'adm') {
            if (currentWfRight === 'v1_variant_1') fileUrl = '../prototypes/adm_v1_variant_1.html';
            else if (currentWfRight === 'v1_variant_2') fileUrl = '../prototypes/adm_v1_variant_2.html';
            else if (currentWfRight === 'v1_variant_3') fileUrl = '../prototypes/adm_v1_variant_3.html';
            else if (currentWfRight === 'v1_variant_4') fileUrl = '../prototypes/adm_stitch_v4.html';
        } else if (prog.id === 'elp') {
            if (currentWfRight === 'proposedV1') fileUrl = '../prototypes/elp_v1.html';
            else if (currentWfRight === 'proposedV2') fileUrl = '../prototypes/elp_v2.html';
            else if (currentWfRight === 'proposedV3') fileUrl = '../prototypes/elp_v3.html';
            else if (currentWfRight === 'v1_variant_1') fileUrl = '../prototypes/elp_v1_variant_1.html';
            else if (currentWfRight === 'v1_variant_2') fileUrl = '../prototypes/elp_v1_variant_2.html';
            else if (currentWfRight === 'v1_variant_3') fileUrl = '../prototypes/elp_v1_variant_3.html';
            else if (currentWfRight === 'v1_variant_4') fileUrl = '../prototypes/elp_v1_stitch_v4.html';
            else if (currentWfRight === 'v2_variant_1') fileUrl = '../prototypes/elp_v2_variant_1.html';
            else if (currentWfRight === 'v2_variant_2') fileUrl = '../prototypes/elp_v2_variant_2.html';
            else if (currentWfRight === 'v2_variant_3') fileUrl = '../prototypes/elp_v2_variant_3.html';
            else if (currentWfRight === 'v2_variant_4') fileUrl = '../prototypes/elp_v2_stitch_v4.html';
        } else if (prog.id === 'contact') {
            if (currentWfRight === 'proposedV1') fileUrl = '../prototypes/contact_v1.html';
            else if (currentWfRight === 'proposedV2') fileUrl = '../prototypes/contact_v2.html';
            else if (currentWfRight === 'proposedV3') fileUrl = '../prototypes/contact_v3.html';
            else if (currentWfRight === 'v2_variant_4') fileUrl = '../prototypes/contact_v2_stitch.html';
        } else {
            if (currentWfRight === 'proposedV1') fileUrl = `../prototypes/${prog.id}_v1.html`;
            else if (currentWfRight === 'proposedV2') fileUrl = `../prototypes/${prog.id}_v2.html`;
            else if (currentWfRight === 'proposedV3') fileUrl = `../prototypes/${prog.id}_v3.html`;
            else if (currentWfRight === 'v1_variant_4') fileUrl = `../prototypes/${prog.id}_stitch_v4.html`;
        }
        
        if (fileUrl) {
            window.open(fileUrl, '_blank');
        } else {
            alert('No preview available for this layout option.');
        }
      });


      if (currentViewMode === 'ascii') {
        document.getElementById('dl-txt').addEventListener('click', () => {
          const parts = [];
          if (currentWfLeft !== 'none') parts.push(`=== LEFT: ${currentWfLeft} ===\n${prog.wireframes.ascii[currentWfLeft]}`);
          if (currentWfMiddle !== 'none') parts.push(`=== MIDDLE: ${currentWfMiddle} ===\n${prog.wireframes.ascii[currentWfMiddle]}`);
          if (currentWfRight !== 'none') parts.push(`=== RIGHT: ${currentWfRight} ===\n${prog.wireframes.ascii[currentWfRight]}`);
          const content = parts.join('\n\n');
          const blob = new Blob([content], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${prog.shortName}_wireframes.txt`;
          a.click();
          URL.revokeObjectURL(url);
        });
        
        document.getElementById('dl-png').addEventListener('click', () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const width = 1200;
          const height = 800;
          canvas.width = width;
          canvas.height = height;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);
          ctx.font = '14px monospace';
          ctx.fillStyle = '#000000';
          
          const activePanes = [];
          if (currentWfLeft !== 'none') activePanes.push(currentWfLeft);
          if (currentWfMiddle !== 'none') activePanes.push(currentWfMiddle);
          if (currentWfRight !== 'none') activePanes.push(currentWfRight);
          
          const paneWidth = activePanes.length > 0 ? width / activePanes.length : width;
          
          activePanes.forEach((paneId, index) => {
            const xOffset = index * paneWidth + 20;
            const lines = prog.wireframes.ascii[paneId] ? prog.wireframes.ascii[paneId].split('\n') : [];
            ctx.fillText(`--- ${paneId} ---`, xOffset, 30);
            lines.forEach((line, i) => {
              ctx.fillText(line, xOffset, 60 + i * 16);
            });
          });
          
          const a = document.createElement('a');
          a.href = canvas.toDataURL('image/png');
          a.download = `${prog.shortName}_wireframes.png`;
          a.click();
        });
      } else {
        document.getElementById('dl-html').addEventListener('click', () => {
          // Download all active panes as HTML files
          const activePanes = [];
          if (currentWfLeft !== 'none') activePanes.push(currentWfLeft);
          if (currentWfMiddle !== 'none') activePanes.push(currentWfMiddle);
          if (currentWfRight !== 'none') activePanes.push(currentWfRight);
          
          activePanes.forEach(paneId => {
            let fileUrl = '';
            if (prog.id === 'adm') {
                if (paneId === 'v1_variant_1') fileUrl = `../prototypes/adm_v1_variant_1.html`;
                else if (paneId === 'v1_variant_2') fileUrl = `../prototypes/adm_v1_variant_2.html`;
                else if (paneId === 'v1_variant_3') fileUrl = `../prototypes/adm_v1_variant_3.html`;
                else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/adm_stitch_v4.html`;
            } else if (prog.id === 'elp') {
                if (paneId === 'proposedV1') fileUrl = `../prototypes/elp_v1.html`;
                else if (paneId === 'proposedV2') fileUrl = `../prototypes/elp_v2.html`;
                else if (paneId === 'proposedV3') fileUrl = `../prototypes/elp_v3.html`;
                else if (paneId === 'v1_variant_1') fileUrl = `../prototypes/elp_v1_variant_1.html`;
                else if (paneId === 'v1_variant_2') fileUrl = `../prototypes/elp_v1_variant_2.html`;
                else if (paneId === 'v1_variant_3') fileUrl = `../prototypes/elp_v1_variant_3.html`;
                else if (paneId === 'v2_variant_1') fileUrl = `../prototypes/elp_v2_variant_1.html`;
                else if (paneId === 'v2_variant_2') fileUrl = `../prototypes/elp_v2_variant_2.html`;
                else if (paneId === 'v2_variant_3') fileUrl = `../prototypes/elp_v2_variant_3.html`;
                else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/elp_v1_stitch_v4.html`;
                else if (paneId === 'v2_variant_4') fileUrl = `../prototypes/elp_v2_stitch_v4.html`;
            } else if (prog.id === 'contact') {
                if (paneId === 'proposedV1') fileUrl = '../prototypes/contact_v1.html';
                else if (paneId === 'proposedV2') fileUrl = '../prototypes/contact_v2.html';
                else if (paneId === 'proposedV3') fileUrl = '../prototypes/contact_v3.html';
                else if (paneId === 'v2_variant_4') fileUrl = '../prototypes/contact_v2_stitch.html';
            } else {
                if (paneId === 'proposedV1') fileUrl = `../prototypes/${prog.id}_v1.html`;
                else if (paneId === 'proposedV2') fileUrl = `../prototypes/${prog.id}_v2.html`;
                else if (paneId === 'proposedV3') fileUrl = `../prototypes/${prog.id}_v3.html`;
                else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/${prog.id}_stitch_v4.html`;
            }

            if (!fileUrl) {
                // Ignore external live sites for physical file download
                return;
            }

            const a = document.createElement('a');
            a.href = fileUrl;
            a.download = fileUrl.split('/').pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          });
        });
      }
    }
    
    renderActions();
    updateWfViews();
  }
  
  
  function fetchHtmlSource(progId, paneId, targetElement) {
    targetElement.textContent = "Loading HTML source...";
    let fileUrl = '';
    
    // Specifically handle marketingHtml mapping to the physical file found at the root
    if (paneId === 'marketingHtml') {
        if (progId === 'adm') fileUrl = '../adm_old_site_reference_agent_gen.html';
        else if (progId === 'pcaim') fileUrl = '../AI_For_Managers_agent_gen.html';
        else if (progId === 'pchm') fileUrl = '../pchm_v1_marketing_html.html';
        else if (progId === 'nam') fileUrl = '../nam_v1_marketing_html.html';
        else if (progId === 'elp') fileUrl = '../elp_v1_marketing_html.html';
    } else if (progId === 'adm') {
        if (paneId === 'v1_variant_1') fileUrl = `../prototypes/adm_v1_variant_1.html`;
        else if (paneId === 'v1_variant_2') fileUrl = `../prototypes/adm_v1_variant_2.html`;
        else if (paneId === 'v1_variant_3') fileUrl = `../prototypes/adm_v1_variant_3.html`;
        else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/adm_stitch_v4.html`;
    } else if (progId === 'elp') {
        if (paneId === 'proposedV1') fileUrl = `../prototypes/elp_v1.html`;
        else if (paneId === 'proposedV2') fileUrl = `../prototypes/elp_v2.html`;
        else if (paneId === 'proposedV3') fileUrl = `../prototypes/elp_v3.html`;
        else if (paneId === 'v1_variant_1') fileUrl = `../prototypes/elp_v1_variant_1.html`;
        else if (paneId === 'v1_variant_2') fileUrl = `../prototypes/elp_v1_variant_2.html`;
        else if (paneId === 'v1_variant_3') fileUrl = `../prototypes/elp_v1_variant_3.html`;
        else if (paneId === 'v2_variant_1') fileUrl = `../prototypes/elp_v2_variant_1.html`;
        else if (paneId === 'v2_variant_2') fileUrl = `../prototypes/elp_v2_variant_2.html`;
        else if (paneId === 'v2_variant_3') fileUrl = `../prototypes/elp_v2_variant_3.html`;
        else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/elp_v1_stitch_v4.html`;
        else if (paneId === 'v2_variant_4') fileUrl = `../prototypes/elp_v2_stitch_v4.html`;
    } else if (progId === 'contact') {
        if (paneId === 'proposedV1') fileUrl = '../prototypes/contact_v1.html';
        else if (paneId === 'proposedV2') fileUrl = '../prototypes/contact_v2.html';
        else if (paneId === 'proposedV3') fileUrl = '../prototypes/contact_v3.html';
        else if (paneId === 'v2_variant_4') fileUrl = '../prototypes/contact_v2_stitch.html';
    } else {
        if (paneId === 'proposedV1') fileUrl = `../prototypes/${progId}_v1.html`;
        else if (paneId === 'proposedV2') fileUrl = `../prototypes/${progId}_v2.html`;
        else if (paneId === 'proposedV3') fileUrl = `../prototypes/${progId}_v3.html`;
        else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/${progId}_stitch_v4.html`;
    }

    if (!fileUrl) {
        targetElement.textContent = "HTML not available for external URLs. Please check the actual site.";
        return;
    }

    fetch(fileUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(text => {
            targetElement.textContent = text;
        })
        .catch(err => {
            targetElement.textContent = "Failed to load HTML source: " + err.message;
        });
  }

  function updateWfViews() {
    const friendlyLabels = {
      none: 'None',
      oldSite: 'Old Website',
      marketingHtml: 'Marketing HTML',
      v1Staging: currentProgramme.id === 'elp' ? 'V2 Staging (Original)' : 'V1 Staging',
      proposedV1: 'Proposed Layout v1',
      proposedV2: 'Proposed Layout v2',
      proposedV3: 'Proposed Layout v3',
      v1_variant_1: 'V1 Prototype 1 (Baseline)',
      v1_variant_2: 'V1 Prototype 2 (Dark Mode)',
      v1_variant_3: 'V1 Prototype 3 (Compact)',
      v1_variant_4: 'Stitch Prototype 4',
      v2Staging: 'V2 Staging URL',
      v2_variant_1: 'V2 Prototype 1 (Baseline)',
      v2_variant_2: 'V2 Prototype 2 (Navy Custom)',
      v2_variant_3: 'V2 Prototype 3 (Compact)',
      v2_variant_4: 'V2 Prototype 4 (Stitch)'
    };

    const colLeft = document.getElementById('wf-col-left');
    colLeft.style.display = 'flex';
    if (currentWfLeft === 'none') {
      wfLabelLeft.textContent = `Left: ${friendlyLabels['none']}`;
      wfPaneLeft.textContent = '';
    } else {
      wfLabelLeft.textContent = `Left: ${friendlyLabels[currentWfLeft]}`;
            if (currentViewMode === 'html') {
        fetchHtmlSource(currentProgramme.id, currentWfLeft, wfPaneLeft);
      } else {
        wfPaneLeft.textContent = currentProgramme.wireframes[currentViewMode][currentWfLeft] || 'No wireframe available for this view';
      }
    }
    
    const colMiddle = document.getElementById('wf-col-middle');
    if (colMiddle) {
      colMiddle.style.display = 'flex';
      if (currentWfMiddle === 'none') {
        wfLabelMiddle.textContent = `Middle: ${friendlyLabels['none']}`;
        wfPaneMiddle.textContent = '';
      } else {
        wfLabelMiddle.textContent = `Middle: ${friendlyLabels[currentWfMiddle]}`;
                if (currentViewMode === 'html') {
          fetchHtmlSource(currentProgramme.id, currentWfMiddle, wfPaneMiddle);
        } else {
          wfPaneMiddle.textContent = currentProgramme.wireframes[currentViewMode][currentWfMiddle] || 'No wireframe available for this view';
        }
      }
    }
    
    const colRight = document.getElementById('wf-col-right');
    colRight.style.display = 'flex';
    if (currentWfRight === 'none') {
      wfLabelRight.textContent = `Proposed Layout: ${friendlyLabels['none']}`;
      wfPaneRight.textContent = '';
    } else {
      wfLabelRight.textContent = `Proposed Layout: ${friendlyLabels[currentWfRight]}`;
            if (currentViewMode === 'html') {
        fetchHtmlSource(currentProgramme.id, currentWfRight, wfPaneRight);
      } else {
        wfPaneRight.textContent = currentProgramme.wireframes[currentViewMode][currentWfRight] || 'No wireframe available for this view';
      }
    }
    
    const previewBtn = document.getElementById('preview-html');
    if (previewBtn) {
      let v = friendlyLabels[currentWfRight] || 'V1';
      previewBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview: ${v}`;
    }

    // Build options dynamically based on prog.id
    let options = `
      <option value="none">None</option>
      <option value="oldSite">Old Site</option>
      <option value="marketingHtml">Marketing HTML</option>
      <option value="v1Staging">${currentProgramme.id === 'elp' ? 'V2 Staging' : 'V1 Staging'}</option>
    `;

    if (currentProgramme.id === 'adm') {
        options += `
          <option value="v1_variant_1">V1 Prototype 1 (Baseline)</option>
          <option value="v1_variant_2">V1 Prototype 2 (Dark Mode)</option>
          <option value="v1_variant_3">V1 Prototype 3 (Compact)</option>
          <option value="v1_variant_4">Stitch Prototype 4</option>
        `;
    } else if (currentProgramme.id === 'elp') {
        options += `
          <option value="proposedV1">Proposed Layout v1</option>
          <option value="proposedV2">Proposed Layout v2</option>
          <option value="proposedV3">Proposed Layout v3</option>
          <option value="v1_variant_1">V1 Prototype 1 (Baseline)</option>
          <option value="v1_variant_2">V1 Prototype 2 (Dark Mode)</option>
          <option value="v1_variant_3">V1 Prototype 3 (Compact)</option>
          <option value="v1_variant_4">V1 Prototype 4 (Stitch)</option>
          <option value="v2_variant_1">V2 Prototype 1 (Baseline)</option>
          <option value="v2_variant_2">V2 Prototype 2 (Navy Custom)</option>
          <option value="v2_variant_3">V2 Prototype 3 (Compact)</option>
          <option value="v2_variant_4">V2 Prototype 4 (Stitch)</option>
        `;
    } else if (currentProgramme.id === 'contact') {
        options += `
          <option value="proposedV1">Proposed Layout v1</option>
          <option value="proposedV2">Proposed Layout v2 (Split)</option>
          <option value="proposedV3">Proposed Layout v3 (Dark)</option>
          <option value="v2_variant_4">Stitch Prototype v2 (Tailwind)</option>
        `;
    } else {
        // NAM, PCAIM, PCHM
        options += `
          <option value="proposedV1">Proposed Layout v1</option>
          <option value="proposedV2">Proposed Layout v2</option>
          <option value="proposedV3">Proposed Layout v3</option>
          <option value="v1_variant_4">Stitch Prototype 4</option>
        `;
    }

    // Replace the select options
    const setSelectOptions = (id, currentVal) => {
        const sel = document.getElementById(id);
        if (!sel) return;
        sel.innerHTML = options;
        sel.value = currentVal;
        // if the currentVal is not in the options (e.g. switching programmes), fallback to 'none'
        if (sel.value !== currentVal) {
            sel.value = 'none';
        }
    };

    // Ensure we don't duplicate the selects, just update them if they exist
    if (!document.getElementById('sel-left')) {
        wfSourceTabs.innerHTML = `
          <div style="display: flex; gap: 8px; align-items: center;">
            <select id="sel-left" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;"></select>
            <select id="sel-middle" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;"></select>
            <select id="sel-right" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;"></select>
          </div>
        `;
        document.getElementById('sel-left').addEventListener('change', (e) => { currentWfLeft = e.target.value; updateWfViews(); });
        document.getElementById('sel-middle').addEventListener('change', (e) => { currentWfMiddle = e.target.value; updateWfViews(); });
        document.getElementById('sel-right').addEventListener('change', (e) => { currentWfRight = e.target.value; updateWfViews(); });
    }

    setSelectOptions('sel-left', currentWfLeft);
    setSelectOptions('sel-middle', currentWfMiddle);
    setSelectOptions('sel-right', currentWfRight);
    
    // Also update our state variables in case they were invalidated by the switch
    currentWfLeft = document.getElementById('sel-left').value;
    currentWfMiddle = document.getElementById('sel-middle').value;
    currentWfRight = document.getElementById('sel-right').value;
  }

  wfClose.addEventListener('click', () => {
    wfViewer.style.display = 'none';
    history.replaceState({ view: 'modal' }, '', '#audit');
  });
  if (wfBack) {
    wfBack.addEventListener('click', () => {
      wfViewer.style.display = 'none';
      history.replaceState({ view: 'modal' }, '', '#audit');
    });
  }
  
  // init
  renderGrid();
  
  // Sidebar toggle
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main-content');
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'flex';
      main.style.marginLeft = '260px';
    } else {
      sidebar.style.display = 'none';
      main.style.marginLeft = '0';
    }
  });
});
