const TOOLKIT_API_URL = process.env.TOOLKIT_API_URL!;
const TOOLKIT_API_KEY = process.env.TOOLKIT_API_KEY!;

async function toolkitRequest(path: string, options: RequestInit = {}) {
  const url = `${TOOLKIT_API_URL}${path}`;
  const headers: Record<string, string> = {
    'x-api-key': TOOLKIT_API_KEY,
    ...(options.headers || {}),
  };
  if (options.method && options.method !== 'GET') {
    headers['Content-Type'] = 'application/json';
  }
  console.log('Toolkit Request:', { url, method: options.method, headers });
  const res = await fetch(url, { ...options, headers });
  const text = await res.text();
  if (!res.ok) {
    console.error('Toolkit API Error:', res.status, text);
    throw new Error(`Toolkit API error: ${res.statusText} - ${text}`);
  }
  return JSON.parse(text);
}

export async function generateText(payload: { prompt: string }) {
  return toolkitRequest('/generate-text', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function testToolkitAuth() {
  return toolkitRequest('/v1/toolkit/test', {
    method: 'GET',
  });
} 