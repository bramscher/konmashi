import React, { useState } from 'react';
import { Button } from './button';
import { Textarea } from './textarea';
import { Pencil } from 'lucide-react';

const DEFAULT_DROIDS = {
  orchestrator: {
    name: 'Orchestrator',
    brainPrompt: 'Always coordinate the efforts of the AI team, keep communication clear, and proactively support the user in achieving their marketing goals.'
  },
  strategist: {
    name: 'Alex "Strategy" Meyer',
    brainPrompt: 'Always think in terms of long-term content strategy, use industry benchmarks, and provide rationale for all recommendations.'
  },
  copywriter: {
    name: 'Priya "Wordsmith" Patel',
    brainPrompt: 'Always write in an upbeat, conversational tone, integrate keywords naturally, and provide actionable tips.'
  },
  designer: {
    name: 'Marco "Visual" Santos',
    brainPrompt: 'Always use the client brand palette, include logos, and create custom icons for key concepts.'
  },
  analyst: {
    name: 'Sofia "Metrics" Ruiz',
    brainPrompt: 'Always compare key metrics, highlight insights, and provide actionable recommendations.'
  },
  community: {
    name: 'Diego "Connector" Kim',
    brainPrompt: 'Always address user concerns publicly, offer direct contact, and highlight steps being taken to resolve issues.'
  },
};

export default function DroidChat({ droidKey = 'orchestrator' }: { droidKey?: keyof typeof DEFAULT_DROIDS }) {
  const [droids, setDroids] = useState(DEFAULT_DROIDS);
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(droids[droidKey].name);
  const [editBrainPrompt, setEditBrainPrompt] = useState(droids[droidKey].brainPrompt);
  const [input, setInput] = useState('');
  // Store chat history for each droid
  const [histories, setHistories] = useState<{ [key: string]: { role: string; content: string }[] }>({});
  const messages = histories[droidKey] || [];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEdit = () => {
    setEditName(droids[droidKey].name);
    setEditBrainPrompt(droids[droidKey].brainPrompt);
    setEditing(true);
  };
  const handleCancel = () => setEditing(false);
  const handleSave = () => {
    setDroids({
      ...droids,
      [droidKey]: { name: editName, brainPrompt: editBrainPrompt },
    });
    setEditing(false);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    setError(null);
    // If this is the first message, add the user's message, then the droid's greeting as the first AI response
    const newMessages = [...messages, { role: 'user', content: input }];
    setHistories((prev) => ({ ...prev, [droidKey]: newMessages }));
    setInput('');
    setLoading(true);
    try {
      // If this is the first message, show the droid's greeting as the first AI response
      if (messages.length === 0) {
        const aiGreeting = {
          role: 'ai',
          content: `Hello, I am ${droids[droidKey].name}. What can I ${getRoleVerb(droidKey)} for you today?`,
        };
        setHistories((prev) => ({ ...prev, [droidKey]: [...newMessages, aiGreeting] }));
        setLoading(false);
        return;
      }
      const res = await fetch('/api/ai/openai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          systemPrompt: droids[droidKey].brainPrompt,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.aiMessage) {
        setError(data.error || 'AI response failed.');
      } else {
        setHistories((prev) => ({
          ...prev,
          [droidKey]: [...newMessages, { role: 'ai', content: typeof data.aiMessage === 'string' ? data.aiMessage : JSON.stringify(data.aiMessage) }],
        }));
      }
    } catch (err: any) {
      setError(err.message || 'Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card rounded-lg shadow p-4 flex flex-col h-full">
      <div className="mb-4 flex items-center justify-between">
        <div>
          {editing ? (
            <>
              <input
                className="font-semibold text-xl mb-1 px-2 py-1 rounded border w-full"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                aria-label="Droid Name"
              />
              <Textarea
                className="w-full mt-2 mb-1"
                value={editBrainPrompt}
                onChange={e => setEditBrainPrompt(e.target.value)}
                rows={3}
                aria-label="Brain Prompt"
              />
              <div className="flex gap-2 mt-1">
                <Button type="button" size="sm" onClick={handleSave}>
                  Save
                </Button>
                <Button type="button" size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-0">
                <span className="text-2xl">🤖</span> {droids[droidKey].name}
                <button className="ml-2 text-muted-foreground hover:text-foreground p-1" onClick={handleEdit} aria-label="Edit droid name and brain prompt">
                  <Pencil size={16} className="inline align-text-bottom" />
                </button>
              </h2>
              <div className="text-muted-foreground text-xs mb-1" style={{marginLeft: 32}}>
                {getRoleFromDroidKey(droidKey)}
              </div>
              {/* Only show the brain prompt when editing */}
            </>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto mb-4 border rounded p-3 bg-background" aria-live="polite">
        {messages.length === 0 && !loading && !error && (
          <div className="text-muted-foreground text-center mt-8">Start a conversation with this droid…</div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-3 py-2 rounded-lg max-w-xs ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}
                 aria-label={msg.role === 'user' ? 'Your message' : 'AI message'}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="mb-3 flex justify-start">
            <div className="px-3 py-2 rounded-lg max-w-xs bg-muted text-foreground opacity-70 animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        {error && (
          <div className="mb-3 text-red-500 text-sm">{error}</div>
        )}
      </div>
      <form onSubmit={handleSend} className="flex gap-2 items-end">
        <label htmlFor="droid-chat-input" className="sr-only">Type your message</label>
        <Textarea
          id="droid-chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          rows={2}
          className="flex-1 resize-none"
          required
          disabled={loading}
        />
        <Button type="submit" className="h-10" disabled={loading || !input.trim()}>Send</Button>
      </form>
    </div>
  );
}

// Helper function to get role from droidKey
function getRoleFromDroidKey(key: keyof typeof DEFAULT_DROIDS) {
  switch (key) {
    case 'orchestrator':
      return 'Orchestrator';
    case 'strategist':
      return 'Content Strategist';
    case 'copywriter':
      return 'Copywriter';
    case 'designer':
      return 'Designer';
    case 'analyst':
      return 'Analyst';
    case 'community':
      return 'Community Manager';
    default:
      return '';
  }
}

// Helper function to get the verb for each droid
function getRoleVerb(key: keyof typeof DEFAULT_DROIDS) {
  switch (key) {
    case 'orchestrator':
      return 'orchestrate';
    case 'strategist':
      return 'strategize';
    case 'copywriter':
      return 'copywrite';
    case 'designer':
      return 'design';
    case 'analyst':
      return 'analyze';
    case 'community':
      return 'connect';
    default:
      return 'help';
  }
} 