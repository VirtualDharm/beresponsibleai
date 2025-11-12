import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserCircleIcon, BellIcon, ShieldCheckIcon, CubeIcon, LockClosedIcon } from './Icons'; // Add new icons

const AccountSettings = () => {
  const { user } = useAuth();

  const settingsNav = [
    { name: 'Account', icon: <UserCircleIcon /> },
    { name: 'Notification', icon: <BellIcon /> },
    { name: 'Security', icon: <ShieldCheckIcon /> },
    { name: 'Apps', icon: <CubeIcon /> },
    { name: 'Privacy & data', icon: <LockClosedIcon /> },
  ];

  return (
    <div className="flex h-full p-6 text-white">
      {/* Settings Sidebar */}
      <div className="w-64 flex-shrink-0 pr-8">
        <div className="flex items-center gap-4 mb-8">
          <img src={user?.user_metadata?.avatar_url || `https://i.pravatar.cc/48?u=${user?.id}`} alt="User Avatar" className="h-12 w-12 rounded-full" />
          <div>
            <h2 className="font-semibold">{user?.user_metadata?.full_name || 'User'}</h2>
            <p className="text-sm text-gray-400">Author</p>
          </div>
        </div>
        <nav className="space-y-2">
          {settingsNav.map((item, index) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium ${
                index === 0 ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Settings Form */}
      <div className="flex-1 rounded-lg bg-[#1e293b] p-8">
        <div className="flex items-center justify-between border-b border-slate-700 pb-6">
          <h1 className="text-2xl font-semibold">Account Setting</h1>
          <div>
            <button className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold hover:bg-slate-700">Cancel</button>
            <button className="ml-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Save</button>
          </div>
        </div>
        
        <div className="mt-8">
            {/* Avatar Section */}
            <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Avatar</h3>
                <div className="relative inline-block">
                    <img src={user?.user_metadata?.avatar_url || `https://i.pravatar.cc/80?u=${user?.id}`} alt="Avatar" className="h-20 w-20 rounded-lg" />
                    <button className="absolute -bottom-1 -right-1 rounded-full bg-slate-600 p-1 text-white hover:bg-slate-500">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM3 17a2 2 0 012-2h12v2H5a2 2 0 01-2-2z"></path></svg>
                    </button>
                </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label className="text-sm text-gray-400">Display name</label>
                    <input type="text" placeholder="Enter name" defaultValue={user?.user_metadata?.full_name || ''} className="mt-2 w-full rounded-lg bg-slate-700 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                    <label className="text-sm text-gray-400">Full Name</label>
                    <input type="text" placeholder="Enter full name" defaultValue={user?.user_metadata?.full_name || ''} className="mt-2 w-full rounded-lg bg-slate-700 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                    <label className="text-sm text-gray-400">Email Address</label>
                    <input type="email" placeholder="Enter email address" defaultValue={user?.email || ''} readOnly className="mt-2 w-full rounded-lg bg-slate-800 p-3 text-sm text-gray-400 cursor-not-allowed" />
                </div>
                 <div>
                    <label className="text-sm text-gray-400">Phone Number</label>
                    <input type="tel" placeholder="Enter phone number" defaultValue={user?.phone || ''} className="mt-2 w-full rounded-lg bg-slate-700 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
            </div>

            {/* Linked Accounts */}
            <div className="mt-8">
                 <h3 className="text-lg font-medium">Linked Accounts</h3>
                 <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur.</p>
                 <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-700 p-4">
                    <div className="flex items-center gap-3">
                        <img src="https://www.google.com/favicon.ico" alt="Google logo" className="w-6 h-6"/>
                        <span className="text-sm font-medium">Sign in with Google</span>
                    </div>
                    <button className="rounded-lg border border-slate-600 px-4 py-1.5 text-sm font-semibold hover:bg-slate-700">Connect</button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;