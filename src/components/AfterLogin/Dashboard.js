import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold font-brockmann">Welcome to Emergent</h1>
      <p className="mt-4 text-lg text-gray-400">You have successfully logged in.</p>
    </div>
  );
};

export default Dashboard;