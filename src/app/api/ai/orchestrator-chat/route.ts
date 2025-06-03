import { generateText } from '@/lib/toolkit-client';

export async function POST(req: Request) {
  try {
    const { messages, systemPrompt } = await req.json();
    if (!Array.isArray(messages) || typeof systemPrompt !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400 });
    }
    // Concatenate system prompt and chat history for MVP
    const prompt = [
      `System: ${systemPrompt}`,
      ...messages.map(m => `${m.role === 'user' ? 'User' : m.role === 'ai' ? 'AI' : 'System'}: ${m.content}`)
    ].join('\n');
    const result = await generateText({ prompt });
    return new Response(JSON.stringify({ aiMessage: result }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), { status: 500 });
  }
} 