export async function POST(req: Request) {
  try {
    const { messages, systemPrompt } = await req.json();
    if (!Array.isArray(messages) || typeof systemPrompt !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400 });
    }

    // Format messages for OpenAI
    const openaiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: any) => ({
        role: m.role === 'ai' ? 'assistant' : m.role,
        content: m.content,
      })),
    ];

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: openaiMessages,
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.choices) {
      return new Response(JSON.stringify({ error: data.error?.message || 'OpenAI error' }), { status: 500 });
    }

    return new Response(JSON.stringify({ aiMessage: data.choices[0].message.content }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), { status: 500 });
  }
} 