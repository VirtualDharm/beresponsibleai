import React from 'react';
import { HomeIcon, MessagesIcon, PluginsIcon, HistoryIcon, SettingsIcon, UserIcon, PlusIcon, StarIcon, ArchiveIcon, SearchIcon } from './Icons';

const Sidebar = () => {
  const recentChats = [
    "Can you fly?",
    "Do you have emotions?",
    "Will robots take over the world?",
    "What's the meaning of life?",
    "Can you write a song?",
  ];

  return (
    <div className="flex h-full w-64 flex-shrink-0 flex-col bg-[#111111] p-4">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-700 pb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
          {/* A simplified logo */}
          <div className="h-4 w-4 rounded-full bg-white/80"></div>
        </div>
        <h1 className="text-lg font-semibold text-white">AI Chat</h1>
      </div>

      {/* New Chat Button */}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#047FB3] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#036a9a]">
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
          {recentChats.map((chat, index) => (
            <a key={index} href="#" className="block truncate rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-slate-700 hover:text-white">
              {chat}
            </a>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="mt-auto border-t border-slate-700 pt-4">
        <a href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-slate-700">
          <img src="https://i.pravatar.cc/32" alt="User Avatar" className="h-8 w-8 rounded-full" />
          <span className="text-sm font-medium text-white">John Doe</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;