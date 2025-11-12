import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { PlusIcon, StarIcon, ArchiveIcon, PluginsIcon, SettingsIcon } from './Icons';

const Sidebar = ({ setActiveView, setActiveChatId, activeChatId }) => {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('chats')
          .select('id, title')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching chats:', error);
        } else {
          setChats(data);
        }
      }
    };
    fetchChats();
  }, [user]);

  const handleNewChat = () => {
    setActiveChatId(null);
    setActiveView('chat');
  };

  return (
    <div className="flex h-full w-64 flex-shrink-0 flex-col bg-[#111111] p-4">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-700 pb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600">
          {/* A simplified logo */}
          <div className="h-4 w-4 rounded-md bg-white/80"></div>
        </div>
        <h1 className="text-lg font-semibold text-white">AI Chat</h1>
      </div>

      {/* New Chat Button */}
      <button onClick={handleNewChat} className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#047FB3] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#036a9a]">
        <PlusIcon />
        New Chat
      </button>

      {/* Main Navigation */}
      <nav className="mt-6 flex-grow space-y-2">
        <a href="#" className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-slate-700 hover:text-white">
          <div className="flex items-center gap-2">
            <StarIcon /> Favorites
          </div>
          <span className="text-xs text-gray-500">2</span>
        </a>
        <a href="#" className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-slate-700 hover:text-white">
          <div className="flex items-center gap-2">
            <ArchiveIcon /> Archived
          </div>
          <span className="text-xs text-gray-500">43</span>
        </a>
        <a href="#" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-slate-700 hover:text-white">
          <PluginsIcon /> Plugins
        </a>
      </nav>

      {/* Recent Chats */}
      <div className="flex-grow overflow-y-auto">
        <h2 className="mb-2 text-xs font-semibold uppercase text-gray-500">Recent Chats</h2>
        <div className="space-y-1">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`w-full text-left truncate rounded-md px-2 py-1.5 text-sm  transition-colors ${activeChatId === chat.id ? 'bg-slate-700 text-white' : 'text-gray-400 hover:bg-slate-700 hover:text-white'}`}
            >
              {chat.title || 'New Chat'}
            </button>
          ))}
        </div>
      </div>

      {/* Settings and User Profile */}
      <div className="mt-auto border-t border-slate-700 pt-4 space-y-2">
         <button onClick={() => setActiveView('settings')} className="flex w-full items-center gap-2 rounded-md p-2 text-gray-400 hover:bg-slate-700 hover:text-white">
           <SettingsIcon />
           <span className="text-sm font-medium">Settings</span>
         </button>
        <a href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-slate-700">
          <img src={user?.user_metadata?.avatar_url || `https://i.pravatar.cc/32?u=${user?.id}`} alt="User Avatar" className="h-8 w-8 rounded-md" />
          <span className="text-sm font-medium text-white">{user?.user_metadata?.full_name || user?.email}</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;