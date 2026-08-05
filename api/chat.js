export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Allow the frontend to pass the user's provided API key, or fallback to the Vercel environment variable
  const { messages, apiKey, model } = req.body;
  const groqApiKey = apiKey || process.env.GROQ_API_KEY;

  if (!groqApiKey) {
    return res.status(401).json({ error: 'Groq API Key not found. Please set GROQ_API_KEY in Vercel or provide it in the request.' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${groqApiKey}`,
      },
      body: JSON.stringify({
        model: model || 'llama3-8b-8192',
        messages: messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error proxying to Groq:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
