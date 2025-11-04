import React from 'react';

const DashboardPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold font-brockmann">Welcome to the Dashboard</h1>
      <p className="mt-4 text-lg text-gray-400">You are now logged in.</p>
      {/* You can build out your dashboard components here */}
    </div>
  );
};

export default DashboardPage;