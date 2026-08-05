/**
 * Krishitek AI Chatbot Widget
 * Integrates Typebot + Intercom + ChatGPT style flows.
 */

(function () {
  // --- SVG Icons ---
  // The user requested their custom uploaded image
  const robotTractorSvg = `<img src="/assets/krisihibot.webp" alt="KrishiBot" style="width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; transform: scale(1.15);" onerror="this.onerror=null; this.src='/assets/logo.png';">`;

  const sendSvg = `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;
  const closeSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`;

  // --- HTML Template ---
  const template = `
    <div id="krishitek-chatbot-root">
      <div id="krishi-admin-toast" class="krishi-admin-toast">
        <span id="krishi-toast-icon">⚡</span>
        <span id="krishi-toast-text">AI Context Updated</span>
      </div>

      <button id="krishitek-chatbot-button" aria-label="Open Chat">
        ${robotTractorSvg}
      </button>

      <div id="krishitek-chatbot-window">
        <div class="krishitek-chatbot-header">
          <div class="krishitek-chatbot-header-info">
            <div class="krishitek-chatbot-avatar">
              ${robotTractorSvg}
            </div>
            <div>
              <h3 class="krishitek-chatbot-title">KrishiBot AI</h3>
              <p class="krishitek-chatbot-subtitle">Your 24/7 Farming Assistant</p>
            </div>
          </div>
          <button class="krishitek-chatbot-close" id="krishitek-chatbot-close">
            ${closeSvg}
          </button>
        </div>
        
        <div class="krishitek-chatbot-messages" id="krishitek-chatbot-messages">
          <!-- Messages go here -->
        </div>

        <div class="krishitek-chatbot-footer">
          <input type="text" class="krishitek-chatbot-input" id="krishitek-chatbot-input" placeholder="Type a message or ask AI..." />
          <button class="krishitek-chatbot-send" id="krishitek-chatbot-send">
            ${sendSvg}
          </button>
        </div>
      </div>
    </div>
  `;

  // Inject CSS link if not present
  if (!document.querySelector('link[href*="chatbot_widget.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    // Use absolute path relative to the server root to guarantee it works on all pages
    link.href = '/assets/chatbot_widget.css';
    document.head.appendChild(link);
  }

  // Inject HTML
  document.body.insertAdjacentHTML('beforeend', template);

  // --- DOM Elements ---
  const root = document.getElementById('krishitek-chatbot-root');
  const btn = document.getElementById('krishitek-chatbot-button');
  const win = document.getElementById('krishitek-chatbot-window');
  const closeBtn = document.getElementById('krishitek-chatbot-close');
  const messagesContainer = document.getElementById('krishitek-chatbot-messages');
  const input = document.getElementById('krishitek-chatbot-input');
  const sendBtn = document.getElementById('krishitek-chatbot-send');
  const toast = document.getElementById('krishi-admin-toast');

  // --- State ---
  let isOpen = false;
  let currentState = 'entry'; // 'entry', 'farmer_flow', 'dealer_flow', 'ai_chat', etc.
  let userData = {};

  // --- Groq API Config ---
  let basePrompt = "You are KrishiBot, an expert AI assistant for Krishitek. You help farmers choose machines, check subsidies, and assist dealers.";
  if (window.getProductKnowledgeText) {
      basePrompt += "\n\n" + window.getProductKnowledgeText();
  } else {
      basePrompt += " Here is your knowledge base about Krishitek products: 1. Power Reapers: Self Propelled Power Reaper, Power Reaper Cum Weeder (Dual Function). 2. Tractor Reapers: Tractor Operated Hydraulic Reaper. 3. Power Weeders: Power Weeder 7CR, Power Weeder 5.5WP, Front Rotary 7FR, Back Rotary 7BR, Mini Power Tiller 3WP. 4. Attachments: Reaper Attachment (for Tiller/Weeder/Swaraj Code), Iron Wheel, Ridger, Sathi. 5. Chaff Cutters. Use this knowledge to answer user queries accurately.";
  }

  const groqConfig = {
    apiKey: '', // Backend handles key via Vercel Env Var
    model: 'llama-3.1-8b-instant',
    systemPrompt: basePrompt
  };

  // --- Core Functions ---
  let lastMessageTime = 0;
  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      win.classList.add('active');
      if (messagesContainer.children.length === 0) {
        initFlow();
      }
      setTimeout(() => input.focus(), 300);

      // Page-aware AI demo
      const pageTitle = document.title || "Home";
      showToast(`🧠 Page-aware AI: Context set to "${pageTitle}"`);
    } else {
      win.classList.remove('active');
    }
  }

  btn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  function showToast(msg) {
    document.getElementById('krishi-toast-text').innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function appendMessage(text, sender, options = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `krishi-msg ${sender === 'bot' ? 'krishi-msg-bot' : 'krishi-msg-user'}`;
    
    let formattedText = text;
    if (sender === 'bot') {
      // Basic markdown parsing to make AI responses look good
      formattedText = formattedText
        .replace(/\n/g, '<br>') // Line breaks
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Bold
        .replace(/\*(.*?)\*/g, '<i>$1</i>'); // Italics
    }
    
    msgDiv.innerHTML = formattedText;
    messagesContainer.appendChild(msgDiv);

    if (options && sender === 'bot') {
      const optsContainer = document.createElement('div');
      optsContainer.className = 'krishi-options-container';
      
      // Check if it should be row (for quick small options) or column
      if (options.length > 3) optsContainer.classList.add('krishi-options-row');

      options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'krishi-option-btn';
        btn.innerText = opt.label;
        btn.onclick = () => {
          // Remove options after selection to make it feel like a chat
          optsContainer.style.display = 'none';
          appendMessage(opt.label, 'user');
          opt.action();
        };
        optsContainer.appendChild(btn);
      });
      messagesContainer.appendChild(optsContainer);
    }

    scrollToBottom();
  }

  function appendTyping() {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'krishi-msg krishi-msg-bot krishi-typing';
    msgDiv.id = 'krishi-typing-indicator';
    msgDiv.innerHTML = '<div class="krishi-dot"></div><div class="krishi-dot"></div><div class="krishi-dot"></div>';
    messagesContainer.appendChild(msgDiv);
    scrollToBottom();
  }

  function removeTyping() {
    const el = document.getElementById('krishi-typing-indicator');
    if (el) el.remove();
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // --- Flow Definitions ---

  function initFlow() {
    let pageContextGreeting = '';
    const pageTitle = document.title ? document.title.split('-')[0].trim() : '';
    if (pageTitle && pageTitle.toLowerCase() !== 'home' && pageTitle.toLowerCase() !== 'krishitech') {
      pageContextGreeting = `I see you are looking at the <b>${pageTitle}</b> page. You can ask me anything about it if you'd like!<br><br>`;
    }
    appendMessage(`👋 Welcome to KrishiTech! I'm KrishiBot.<br><br>${pageContextGreeting}To serve you better, please tell me who you are:`, 'bot', [
      { label: "🌾 I'm a Farmer", action: () => { currentState = 'farmer_flow'; askCrop(); } },
      { label: "🤝 I want to be a Dealer", action: () => handleDealerSteps(1) },
      { label: "🏪 I'm an Existing Dealer", action: () => handleSimpleFlow('Dealer Login') },
      { label: "💼 I'm an Employee", action: () => handleSimpleFlow('Employee Login') },
      { label: "💬 Chat on WhatsApp", action: () => {
          window.open('https://wa.me/919157062093', '_blank');
          setTimeout(() => {
            appendMessage("I've opened WhatsApp in a new tab! Our human support team will assist you there.<br><br>Do you need help with anything else here?", 'bot', [
              { label: "🔙 Go Back to Menu", action: () => initFlow() }
            ]);
          }, 800);
      }},
      { label: "💬 Ask Anything (AI)", action: () => { currentState = 'ai_chat'; appendMessage("Ask me anything about KrishiTech products!", 'bot'); } }
    ]);
  }

  function handleSimpleFlow(type) {
    appendTyping();
    setTimeout(() => {
      removeTyping();
      let msg = `To proceed with <b>${type}</b>, we will need to collect a few more details from you.`;
      
      if (type === 'Subsidy') {
         msg = "Government agricultural subsidies vary by state. To check your eligibility, we'll need to know your State, District, and Farm Size.";
      } else if (type.includes('Login')) {
         msg = `This would redirect to the secure <b>${type}</b> portal. After logging in, you'll see your personalized role-based dashboard.`;
      }
      
      appendMessage(msg, 'bot', [
        { label: "🔙 Go Back", action: () => initFlow() }
      ]);
    }, 1000);
  }

  function handleDealerSteps(step) {
    appendTyping();
    setTimeout(() => {
      removeTyping();
      if (step === 1) {
        appendMessage("To get started, what type of business do you have?", 'bot', [
          { label: "Existing Dealership", action: () => handleDealerSteps(2) },
          { label: "New Startup / Individual", action: () => handleDealerSteps(2) }
        ]);
      } else if (step === 2) {
        appendMessage("Which region are you located in?", 'bot', [
          { label: "North India", action: () => handleDealerSteps(3) },
          { label: "South India", action: () => handleDealerSteps(3) },
          { label: "East India", action: () => handleDealerSteps(3) },
          { label: "West India", action: () => handleDealerSteps(3) },
          { label: "Central India", action: () => handleDealerSteps(3) }
        ]);
      } else {
        appendMessage("To keep your data 100% secure, we handle all dealer applications directly via our verified WhatsApp channel. No sensitive data is collected here.", 'bot', [
          { label: "📱 Apply Securely via WhatsApp", action: () => {
              window.open('https://wa.me/919157062093', '_blank');
              setTimeout(() => initFlow(), 1000);
          }},
          { label: "🔙 Go Back", action: () => initFlow() }
        ]);
      }
    }, 800);
  }



  function askCrop() {
    appendMessage("What is your primary crop?", 'bot', [
      { label: "Wheat / Paddy", action: () => { userData.crop = 'Wheat'; askGoal(); } },
      { label: "Sugarcane", action: () => { userData.crop = 'Sugarcane'; askGoal(); } },
      { label: "Vegetables", action: () => { userData.crop = 'Vegetables'; askGoal(); } }
    ]);
  }

  function askGoal() {
    appendMessage("What is your main goal?", 'bot', [
      { label: "Harvesting", action: () => { userData.goal = 'Harvesting'; generateAIRecommendation(); } },
      { label: "Weeding", action: () => { userData.goal = 'Weeding'; generateAIRecommendation(); } },
      { label: "Land Preparation", action: () => { userData.goal = 'LandPrep'; generateAIRecommendation(); } }
    ]);
  }

  function generateAIRecommendation() {
    appendTyping();
    showToast("🧠 AI Lead Score: WARM");
    
    // Simulate AI thinking and Groq API call
    setTimeout(() => {
      removeTyping();
      let product = "Power Reaper";
      let img = "power_reaper_1784133241697.png";
      
      if (userData.goal === 'Weeding') { product = "Power Weeder"; img = "power_weeder_1784133265292.png"; }
      
      const responseHtml = `
        Based on your profile (${userData.crop}, ${userData.goal}), I recommend the <b>${product}</b>.<br><br>
        <div class="krishi-chat-card">
          <img src="../assets/${img}" alt="${product}" onerror="this.src='https://via.placeholder.com/300x120?text=Product+Image'">
          <div class="krishi-chat-card-content">
            <h4 class="krishi-chat-card-title">${product}</h4>
            <p class="krishi-chat-card-desc">Perfect for your specific farming needs.</p>
            <div class="krishi-chat-card-actions">
              <button class="krishi-chat-btn-primary" onclick="alert('Demo Booked!')">Book Demo</button>
              <button class="krishi-chat-btn-secondary" onclick="alert('PDF Downloading...')">Brochure</button>
            </div>
          </div>
        </div>
      `;

      appendMessage(responseHtml, 'bot', [
        { label: "Compare Products", action: () => handleSimpleFlow('Compare') },
        { label: "Find Dealer", action: () => handleSimpleFlow('Dealer Locator') },
        { label: "End Chat", action: () => showEndScreen() }
      ]);
    }, 1500);
  }

  function startDealerFlow() {
    appendMessage("How can we help you today?", 'bot', [
      { label: "Become Dealer", action: () => handleSimpleFlow('Become Dealer form') },
      { label: "Existing Dealer", action: () => handleSimpleFlow('Dealer Dashboard logic') },
      { label: "Bulk Purchase", action: () => handleSimpleFlow('Bulk Purchase') }
    ]);
  }

  function showBrowseCards() {
    appendMessage("Here are some quick links:", 'bot', [
      { label: "Products", action: () => window.location.href='product_catalog_v2_stitch.html' },
      { label: "Subsidies", action: () => handleSimpleFlow('Subsidies') },
      { label: "Contact Us", action: () => window.location.href='contact_v2_stitch.html' }
    ]);
  }

  function showEndScreen() {
    showToast("📝 Conversation Summary generated for Sales Team");
    appendMessage("Thank you! Is there anything else I can help you with?", 'bot', [
      { label: "🏠 Home", action: () => initFlow() },
      { label: "🚜 Products", action: () => showBrowseCards() }
    ]);
    currentState = 'entry';
  }

  // --- Free Text Input (AI / FAQ logic) ---
  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  async function handleSend() {
    let text = input.value.trim();
    if (!text) return;

    // Ponytail Security: Rate Limiting
    const now = Date.now();
    if (now - lastMessageTime < 2000) {
      appendMessage("Whoa there! Please wait a couple of seconds between messages.", 'bot');
      return;
    }
    lastMessageTime = now;
    
    // Ponytail Security: Aggressive sanitize to prevent XSS / Prompt Injection
    text = text.replace(/[<>'\"\\]/g, ''); 
    if (text.length > 250) text = text.substring(0, 250);
    
    appendMessage(text, 'user');
    input.value = '';

    appendTyping();

    // Call our secure Vercel Serverless proxy backend
    if (currentState === 'ai_chat') {
      try {
        const response = await callGroqAPI(text);
        removeTyping();
        appendMessage(response, 'bot');
      } catch (err) {
        removeTyping();
        appendMessage("Sorry, the AI provider had an error. Please check your API key in the Admin Dashboard.", 'bot');
      }
    } else {
      // Mock AI Response
      setTimeout(() => {
        removeTyping();
        if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) {
          appendMessage("Our product prices range from ₹40,000 to ₹1,50,000 depending on the model and attachments. Would you like a specific quote?", 'bot');
        } else if (text.toLowerCase().includes('warranty')) {
          appendMessage("We offer a standard 1-year warranty on all our machines, covering manufacturing defects.", 'bot');
        } else {
          appendMessage("That's a great question. Our AI would normally process this via Groq API. Please configure your API key in the Chatbot Admin Dashboard to enable live AI responses.", 'bot');
        }
      }, 1000);
    }
  }

  // Actual Groq API integration logic via secure Vercel Serverless Function
  async function callGroqAPI(userText) {
    const url = "/api/chat";
    
    // Get current language from localStorage
    let langContext = "";
    const langCode = localStorage.getItem('lang') || 'en';
    if (langCode !== 'en') {
       langContext = ` Please respond in the language code: ${langCode}.`;
    }

    const body = {
      model: groqConfig.model,
      messages: [
        { role: "system", content: groqConfig.systemPrompt + langContext },
        { role: "user", content: userText }
      ],
      apiKey: groqConfig.apiKey // Optional fallback
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    return data.choices[0].message.content;
  }

  // Smart Follow-up logic
  let interactionTimer;
  document.addEventListener('mousemove', () => {
    clearTimeout(interactionTimer);
    interactionTimer = setTimeout(() => {
      if (!isOpen) {
        // Mock exit intent or inactivity trigger
        showToast("⚡ Auto Trigger: Smart Follow-up");
        toggleChat();
      }
    }, 60000); // 1 minute inactivity
  });
  
  // Auto-open chatbot on page load, but only ONCE per unique page in the session
  const sessionKey = 'krishi_chat_popped_up_' + window.location.pathname;
  if (!sessionStorage.getItem(sessionKey)) {
    setTimeout(() => {
      if (!isOpen) toggleChat();
      sessionStorage.setItem(sessionKey, 'true');
    }, 1000);
  }

})();
