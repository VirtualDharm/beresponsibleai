import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { SearchIcon, MoonIcon, BellIcon, AppIcon, ArrowDownIcon } from './Icons';

const ChatHeader = () => {
  const { user } = useAuth(); // Get the current user from context
  const navigate = useNavigate();

  // Logout handler function
  const handleLogout = async () => {
    console.log('Logging out user:', user?.email);
    await supabase.auth.signOut();
    navigate('/', { replace: true }); // Redirect to landing page after logout
    console.log('User logged out successfully');
  };

  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-slate-700 bg-[#111111] px-6">
      {/* GPT Model Selector (from original design) */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white">GPT 4</span>
        <ArrowDownIcon />
      </div>

      {/* Controls (from original design) + User Info and Logout */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search here..."
            className="w-full rounded-lg bg-slate-700 py-1.5 pl-9 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="text-gray-400 hover:text-white"><MoonIcon /></button>
        <button className="text-gray-400 hover:text-white"><AppIcon /></button>
        <button className="text-gray-400 hover:text-white"><BellIcon /></button>

        <button className="rounded-lg bg-[#047FB3] px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#036a9a]">
          Try AI Pro
        </button>

        {/* User Info and Logout Button */}
        <div className="flex items-center gap-3 border-l border-slate-700 pl-4">
          <span className="hidden text-sm text-gray-400 sm:block">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="rounded-md bg-[#0DF9FF] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#036a9a]"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
