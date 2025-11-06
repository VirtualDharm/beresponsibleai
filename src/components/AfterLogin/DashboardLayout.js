import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/', { replace: true });
  };

  return (
    <div className="flex h-screen w-full bg-[#0f172a] text-gray-300 font-sans">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        {/* Add a simple header with a logout button */}
        <header className="flex h-16 items-center justify-end border-b border-slate-700 bg-[#1e293b] px-6">
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Logout
          </button>
        </header>
        <MainContent />
      </div>
    </div>
  );
};

export default DashboardLayout;
