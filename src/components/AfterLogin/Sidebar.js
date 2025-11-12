import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { PlusIcon, StarIcon, ArchiveIcon, PluginsIcon, SettingsIcon, ArrowDownIcon, HistoryIcon } from './Icons';

const Sidebar = ({ setActiveView, setActiveChatId, activeChatId }) => {
  const { user } = useAuth();
  const [recentChats, setRecentChats] = useState([]);
  const [favoriteChats, setFavoriteChats] = useState([]);
  const [archivedChats, setArchivedChats] = useState([]);
  
  const [showFavorites, setShowFavorites] = useState(true);
  const [showArchived, setShowArchived] = useState(false);

  const fetchChats = useCallback(async () => {
    if (!user) return;

    console.log('[Sidebar] Fetching all chats for user...');
    const { data, error } = await supabase
      .from('chats')
      .select('id, title, status')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching chats:', error);
    } else {
      console.log(`[Sidebar] Fetched ${data.length} total chats. Categorizing...`);
      setRecentChats(data);
      setFavoriteChats(data.filter(c => c.status === 'favorite'));
      setArchivedChats(data.filter(c => c.status === 'archived'));
    }
  }, [user]);

  useEffect(() => {
    fetchChats();

    const chatSubscription = supabase
      .channel(`public:chats:user_id=eq.${user?.id}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'chats', filter: `user_id=eq.${user?.id}` },
        (payload) => {
          console.log('[Sidebar] Real-time chat change received!', payload);
          fetchChats();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(chatSubscription);
    };
  }, [user, fetchChats]);

  const handleNewChat = () => {
    setActiveChatId(null);
    setActiveView('chat');
  };

  const updateChatStatus = async (chatId, newStatus) => {
    console.log(`[Sidebar] Updating chat ${chatId} to status: ${newStatus}`);
    const { error } = await supabase
      .from('chats')
      .update({ status: newStatus })
      .eq('id', chatId);
    
    if (error) {
      console.error(`Error updating chat status:`, error);
    }
  };

  const ChatItem = ({ chat }) => (
    <div className="group relative w-full">
      <button
        onClick={() => {
          setActiveChatId(chat.id);
          setActiveView('chat');
        }}
        className={`w-full text-left truncate rounded-md px-2 py-1.5 text-sm transition-colors ${
          activeChatId === chat.id
            ? 'bg-slate-700 text-white'
            : 'text-gray-400 hover:bg-slate-700 hover:text-white'
        }`}
      >
        {chat.title || 'New Chat'}
      </button>
      <div className="absolute right-1 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-1 bg-slate-800 border border-slate-700 rounded-md p-0.5">
        {chat.status !== 'favorite' && (
          <button onClick={() => updateChatStatus(chat.id, 'favorite')} title="Favorite">
            <StarIcon className="h-4 w-4 text-gray-400 hover:text-yellow-400" />
          </button>
        )}
        {chat.status !== 'archived' && (
          <button onClick={() => updateChatStatus(chat.id, 'archived')} title="Archive">
            <ArchiveIcon className="h-4 w-4 text-gray-400 hover:text-white" />
          </button>
        )}
        {chat.status !== 'active' && (
          <button onClick={() => updateChatStatus(chat.id, 'active')} title="Move to Recents">
            <HistoryIcon className="h-4 w-4 text-gray-400 hover:text-white" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex h-full w-64 flex-shrink-0 flex-col bg-[#111111] p-4">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-700">
        <img src="./logo.png" alt="Demo" className="h-11 w-11 rounded-md" />
        <h1 className="text-lg font-semibold text-white">beResponsibleAI</h1>
      </div>

      {/* New Chat Button */}
      <button
        onClick={handleNewChat}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#047FB3] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#036a9a]"
      >
        <PlusIcon />
        New Chat
      </button>
      
      {/* Scrollable Area */}
      <nav className="mt-6 flex-grow space-y-1 overflow-y-auto">
        {/* Favorites */}
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-slate-700 hover:text-white"
        >
          <div className="flex items-center gap-2">
            <StarIcon /> Favorites
          </div>
          <span className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{favoriteChats.length}</span>
            <ArrowDownIcon className={`h-4 w-4 transition-transform ${showFavorites ? 'rotate-180' : ''}`} />
          </span>
        </button>
        {showFavorites && (
          <div className="pl-4 space-y-1">
            {favoriteChats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))}
          </div>
        )}

        {/* Archived */}
        <button
          onClick={() => setShowArchived(!showArchived)}
          className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-slate-700 hover:text-white"
        >
          <div className="flex items-center gap-2">
            <ArchiveIcon /> Archived
          </div>
          <span className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{archivedChats.length}</span>
            <ArrowDownIcon className={`h-4 w-4 transition-transform ${showArchived ? 'rotate-180' : ''}`} />
          </span>
        </button>
        {showArchived && (
          <div className="pl-4 space-y-1">
            {archivedChats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))}
          </div>
        )}

        {/* Recents */}
        <div className="pt-4">
          <h2 className="mb-2 px-2 text-xs font-semibold uppercase text-gray-500">Recent Chats</h2>
          <div className="space-y-1">
            {recentChats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-slate-700 pt-4 space-y-2">
        {/* Invisible spacer to keep layout consistent even after removing button */}
        <div className="h-0.5 invisible"></div>

        <a
          onClick={() => setActiveView('settings')}
          className="flex items-center justify-between gap-2 rounded-md p-2 hover:bg-slate-700 transition-colors"
        >
          <div className="flex items-center gap-2 truncate">
            <img
              src={
                user?.user_metadata?.avatar_url ||
                `https://i.pravatar.cc/32?u=${user?.id}`
              }
              alt="User Avatar"
              className="h-8 w-8 rounded-md"
            />
            <span className="text-sm font-medium text-white truncate">
              {user?.user_metadata?.full_name || user?.email}
            </span>
          </div>
          <SettingsIcon className="flex-shrink-0 text-gray-400 hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
