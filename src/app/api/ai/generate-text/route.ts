import { generateText } from '@/lib/toolkit-client';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt is required.' }), { status: 400 });
    }
    const result = await generateText({ prompt });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), { status: 500 });
  }
} 