import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { SendIcon } from './Icons';

const ChatView = ({ chatId }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Effect to fetch initial messages and subscribe to real-time updates
  useEffect(() => {
    if (!chatId || !user) {
      console.log("[ChatView] Effect skipped: No chatId or user.");
      return;
    }

    console.log(`[ChatView] Effect triggered for chatId: ${chatId}`);

    const fetchMessages = async () => {
      console.log(`[ChatView] Fetching initial messages for chat: ${chatId}`);
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true });

      if (fetchError) {
        setError(fetchError.message);
        console.error(`[ChatView] Error fetching messages:`, fetchError);
      } else {
        console.log(`[ChatView] Successfully fetched ${data.length} messages.`);
        setMessages(data);
      }
      setLoading(false);
    };

    fetchMessages();

    // Set up a real-time subscription for new messages
    console.log(`[ChatView] Subscribing to new messages for chat: ${chatId}`);
    const subscription = supabase
      .channel(`public:messages:chat_id=eq.${chatId}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages', filter: `chat_id=eq.${chatId}` },
        (payload) => {
          console.log('[ChatView] Real-time: Received new message payload:', payload);
          // RLS ensures we only get messages for chats we own, so we can add it directly.
          setMessages((prevMessages) => [...prevMessages, payload.new]);
        }
      )
      .subscribe((status, err) => {
        if (status === 'SUBSCRIBED') {
          console.log(`[ChatView] Successfully subscribed to channel for chat ${chatId}`);
        }
        if (status === 'CHANNEL_ERROR') {
          console.error(`[ChatView] Subscription error for chat ${chatId}:`, err);
        }
      });

    // Cleanup function to remove the subscription when the component unmounts or chatId changes
    return () => {
      console.log(`[ChatView] Unsubscribing from channel for chat: ${chatId}`);
      supabase.removeChannel(subscription);
    };
  }, [chatId, user]); // Rerun effect if chatId or user changes

  // Effect to scroll down when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !user || !chatId) {
        console.warn("[ChatView] handleSendMessage stopped: empty message, no user, or no chatId.");
        return;
    }

    const userMessageContent = newMessage.trim();
    console.log(`[ChatView] Preparing to send user message: "${userMessageContent}"`);
    setNewMessage(''); // Clear input immediately for better UX

    // Optimistically add user's message to the UI
    const optimisticMessage = {
        id: `temp-${Date.now()}`, // Temporary ID for the key
        chat_id: chatId,
        role: 'user',
        content: userMessageContent,
        created_at: new Date().toISOString(),
    };
    setMessages(prev => [...prev, optimisticMessage]);

    // Insert user message into the database
    const { error: insertError } = await supabase.from('messages').insert({
        chat_id: chatId,
        role: 'user',
        content: userMessageContent,
    });

    if (insertError) {
      console.error('[ChatView] Error sending message to database:', insertError);
      // Revert optimistic update on error
      setMessages(prev => prev.filter(msg => msg.id !== optimisticMessage.id));
      setMessages(newMessage); // Restore text to input
      return;
    }
    console.log('[ChatView] User message sent successfully to database.');

    // --- AI Response Simulation ---
    console.log('[ChatView] Simulating AI response...');
    setTimeout(async () => {
      const aiResponseContent = `This is a simulated AI response to: "${userMessageContent}"`;
      console.log(`[ChatView] Preparing to send simulated AI response: "${aiResponseContent}"`);
      
      const { error: aiError } = await supabase.from('messages').insert({
        chat_id: chatId,
        role: 'assistant',
        content: aiResponseContent,
      });

      if (aiError) {
        console.error('[ChatView] Error saving AI response to database:', aiError);
      } else {
        console.log('[ChatView] AI response sent successfully to database.');
      }
    }, 1500);
  };
  
  if (loading) return <div className="p-6 text-center text-gray-400">Loading chat...</div>;
  if (error) return <div className="p-6 text-center text-red-400">Error: {error}</div>;

  return (
    <div className="flex h-full flex-col">
      {/* Message List */}
      <div className="flex-1 space-y-6 overflow-y-auto p-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
            {message.role === 'assistant' && (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" /></svg>
              </div>
            )}
            
            <div className={`max-w-xl rounded-lg p-3 text-sm ${message.role === 'user' ? 'bg-[#047FB3] text-white' : 'bg-slate-700 text-gray-300'}`}>
              <p>{message.content}</p>
            </div>

            {message.role === 'user' && (
              <img src={user?.user_metadata?.avatar_url || `https://i.pravatar.cc/32?u=${user?.id}`} alt="User" className="h-8 w-8 rounded-full flex-shrink-0" />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t border-slate-700 p-4">
        <form onSubmit={handleSendMessage} className="relative">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full resize-none rounded-lg bg-slate-700 p-3 pr-20 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0DF9FF]"
            rows="1"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
              }
            }}
          />
          <button type="submit" className="absolute bottom-2.5 right-2.5 rounded-md bg-[#047FB3] p-1.5 text-white hover:bg-[#036a9a] disabled:opacity-50" disabled={!newMessage.trim()}>
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatView;