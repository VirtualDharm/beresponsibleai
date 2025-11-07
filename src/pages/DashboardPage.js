import React from 'react';
import Sidebar from '../components/AfterLogin/Sidebar';
import MainContent from '../components/AfterLogin/MainContent';

const DashboardPage = () => {
  return (
    <div className="flex h-screen w-full bg-[#000000] text-gray-300 font-sans">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default DashboardPage;