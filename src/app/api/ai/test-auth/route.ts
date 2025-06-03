import { testToolkitAuth } from '@/lib/toolkit-client';

export async function GET() {
  try {
    // Debug: Log environment variables
    console.log('TOOLKIT_API_URL:', process.env.TOOLKIT_API_URL);
    console.log('TOOLKIT_API_KEY:', process.env.TOOLKIT_API_KEY);

    const result = await testToolkitAuth();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    // Debug: Log error details
    console.error('Toolkit Auth Test Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), { status: 500 });
  }
} 