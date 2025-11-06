import React from 'react';
import { SearchIcon, MoonIcon, BellIcon, AppIcon, ArrowDownIcon } from './Icons';

const ChatHeader = () => {
  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-slate-700 bg-[#1e293b] px-6">
      {/* GPT Model Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white">GPT 4</span>
        <ArrowDownIcon />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <div className="relative">
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
        <button className="rounded-lg bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600">
          Try AI Pro
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
