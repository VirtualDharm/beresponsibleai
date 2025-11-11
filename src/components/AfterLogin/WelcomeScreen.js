import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook
import { ArrowIcon } from './Icons';

const suggestions = [
  "Don't worry, this update is quicker than your internet history deletion!",
  "A majestic bird soars high above a crystal-clear glacial lake, its wings catching the sunlight.",
  "For Wallace the walrus, the perfect day starts with a leisurely swim in the icy Arctic waters.",
  "The best time to stretch is whenever your body feels tight or stiff!",
];

const WelcomeScreen = () => {
  // Get the user from the AuthContext
  const { user } = useAuth();

  // Determine the display name: Use full_name from metadata, or fall back to email
  const displayName = user?.user_metadata?.full_name || user?.email || 'User';

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">
        {/* Use the dynamic displayName */}
        <span className="bg-gradient-to-r from-[#0DF9FF] to-[#E3E8E6] bg-clip-text text-transparent">
          Welcome, {displayName}
        </span>
      </h1>
      <p className="mt-2 text-3xl text-gray-400">May I be of assistance today?</p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {suggestions.map((text, index) => (
          <div key={index} className="group relative cursor-pointer rounded-lg bg-slate-800 p-4 transition-colors hover:bg-slate-700">
            <p className="text-sm text-gray-300">{text}</p>
            <div className="absolute bottom-2 right-2 rounded-md bg-slate-600 p-1 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowIcon className="h-4 w-4 -rotate-45" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;
