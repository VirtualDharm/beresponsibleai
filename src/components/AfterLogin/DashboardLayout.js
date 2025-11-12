import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Toaster, toast } from 'react-hot-toast'; // Import Toaster and toast
const DashboardLayout = () => {
  const { user } = useAuth();
  const [activeView, setActiveView] = useState('chat');
  const [activeChatId, setActiveChatId] = useState(null);

  const handleNewChat = async (firstMessage) => {
    if (!user || !firstMessage.trim()) {
      console.error("User not authenticated or message is empty.");
      return;
    }

    console.log('[Layout] Creating new chat...');
    // 1. Create a new chat record
    const { data: chatData, error: chatError } = await supabase
      .from('chats')
      .insert({ 
        title: firstMessage.substring(0, 40) + (firstMessage.length > 40 ? '...' : ''),
        user_id: user.id 
      })
      .select()
      .single(); // Use .single() to get a single object back

    if (chatError) {
      console.error('Error creating new chat:', chatError);
      return;
    }
    
    const newChatId = chatData.id;
    console.log(`[Layout] New chat created with ID: ${newChatId}`);

    // 2. Insert the first message into the messages table
    const { error: messageError } = await supabase.from('messages').insert({
      chat_id: newChatId,
      role: 'user',
      content: firstMessage,
    });

    if (messageError) {
        console.error('Error sending first message:', messageError);
        // Clean up the created chat if the first message fails
        await supabase.from('chats').delete().eq('id', newChatId);
        return;
    }

    console.log(`[Layout] First message sent for chat ID: ${newChatId}`);
    
    // 3. Set the new chat as active
    setActiveChatId(newChatId);
    setActiveView('chat');
  };

  return (
    <div className="flex h-screen w-full bg-[#0f172a] text-gray-300 font-sans">
      {/* Add the Toaster component here */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      
      <Sidebar 
        setActiveView={setActiveView} 
        setActiveChatId={setActiveChatId} 
        activeChatId={activeChatId}
      />
      <MainContent 
        activeView={activeView} 
        activeChatId={activeChatId}
        onNewChat={handleNewChat}
      />
    </div>
  );
};

export default DashboardLayout;