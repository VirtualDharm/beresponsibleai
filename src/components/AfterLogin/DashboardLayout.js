import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const DashboardLayout = () => {
  const { user } = useAuth(); // Get the authenticated user
  const [activeView, setActiveView] = useState('chat');
  const [activeChatId, setActiveChatId] = useState(null);

  const handleNewChat = async (firstMessage) => {
    if (!user) {
      console.error("User is not authenticated. Cannot create chat.");
      return;
    }

    // 1. Create a new chat session associated with the current user
    const { data, error } = await supabase
      .from('chats')
      .insert({ 
        title: firstMessage.substring(0, 40),
        user_id: user.id // **THE FIX: Associate chat with the user_id**
      })
      .select();

    if (error) {
      console.error('Error creating new chat:', error);
      return;
    }
    
    const newChatId = data[0].id;

    // After creating the chat, insert the first message
    const { error: messageError } = await supabase.from('messages').insert({
      chat_id: newChatId,
      role: 'user',
      content: firstMessage,
    });

    if (messageError) {
        console.error('Error sending first message:', messageError);
        // Optionally, you might want to delete the chat if the first message fails
        await supabase.from('chats').delete().eq('id', newChatId);
        return;
    }

    setActiveChatId(newChatId); // This will now work correctly
    setActiveView('chat'); // Ensure the view is set to chat
  };

  return (
    <div className="flex h-screen w-full bg-[#0f172a] text-gray-300 font-sans">
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