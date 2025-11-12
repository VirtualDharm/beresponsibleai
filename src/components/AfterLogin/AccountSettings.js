import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabaseClient';
import { toast } from 'react-hot-toast';

// Helper function to get initials for the avatar fallback
const getInitials = (name) => {
  if (!name) return '?';
  const names = name.split(' ');
  if (names.length > 1) {
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  }
  return name[0].toUpperCase();
};

const AccountSettings = () => {
  const { user } = useAuth();
  
  // State to manage form inputs
  const [displayName, setDisplayName] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isGoogleLinked, setIsGoogleLinked] = useState(false);

  // Populate form with user data when component loads
  useEffect(() => {
    if (user) {
      setDisplayName(user.user_metadata?.display_name || '');
      setFullName(user.user_metadata?.full_name || '');
      setPhone(user.user_metadata?.phone || ''); 

      const providers = user.app_metadata?.providers || [];
      setIsGoogleLinked(providers.includes('google'));
    }
  }, [user]);

  // Function to handle form submission
  const handleUpdate = async () => {
    setIsSaving(true);
    const loadingToast = toast.loading('Saving changes...');

    // **THE FIX: Update the 'data' object (user_metadata) with the phone number**
    const { data, error } = await supabase.auth.updateUser({
      data: {
        full_name: fullName,
        display_name: displayName,
        phone: phone,
      }
    });

    setIsSaving(false);
    toast.dismiss(loadingToast);

    if (error) {
      toast.error(`Error: ${error.message}`);
    } else {
      toast.success('Account updated successfully!');
      // No need for OTP toast notification now
    }
  };

  // Function to link a Google account (remains the same)
   const handleLinkGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        // When a user is already logged in, this will link the accounts
    });

    if (error) {
        toast.error(`Error linking Google account: ${error.message}`);
    }
  };

  const handleCancel = () => {
    // Reset form fields to original user data
    if (user) {
      setDisplayName(user.user_metadata?.display_name || '');
      setFullName(user.user_metadata?.full_name || '');
      setPhone(user.user_metadata?.phone || '');
    }
  };

  // Fallback Avatar with initials
  const AvatarFallback = () => (
    <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-pink-600 text-white text-3xl font-bold">
      {getInitials(fullName || user?.email)}
    </div>
  );

  return (
    <div className="flex h-full p-6 text-white">
      {/* Main Settings Form */}
      <div className="flex-1 rounded-lg bg-[#1e293b] p-8">
        <div className="flex items-center justify-between border-b border-slate-700 pb-6">
          <h1 className="text-2xl font-semibold">Account Setting</h1>
          <div>
            <button onClick={handleCancel} className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold hover:bg-slate-700 disabled:opacity-50" disabled={isSaving}>
              Cancel
            </button>
            <button onClick={handleUpdate} className="ml-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50" disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
        
        <div className="mt-8">
            {/* Avatar Section */}
            <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Avatar</h3>
                <div className="relative inline-block">
                    {user?.user_metadata?.avatar_url ? (
                        <img src={user.user_metadata.avatar_url} alt="Avatar" className="h-20 w-20 rounded-lg" />
                    ) : (
                        <AvatarFallback />
                    )}
                    <button className="absolute -bottom-1 -right-1 rounded-full bg-slate-600 p-1 text-white hover:bg-slate-500" title="Edit avatar (coming soon)">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM3 17a2 2 0 012-2h12v2H5a2 2 0 01-2-2z"></path></svg>
                    </button>
                </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <label className="text-sm text-gray-400">Display name</label>
                    <input type="text" placeholder="Enter display name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-700 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                    <label className="text-sm text-gray-400">Full Name</label>
                    <input type="text" placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-700 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                    <label className="text-sm text-gray-400">Email Address</label>
                    <input type="email" value={user?.email || ''} readOnly className="mt-2 w-full cursor-not-allowed rounded-lg bg-slate-800 p-3 text-sm text-gray-400" />
                </div>
                 <div>
                    <label className="text-sm text-gray-400">Phone Number</label>
                    {/* **THE FIX: Bind input to the 'phone' state** */}
                    <input type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full rounded-lg bg-slate-700 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
            </div>

            {/* Linked Accounts */}
            <div className="mt-8">
                 <h3 className="text-lg font-medium">Linked Accounts</h3>
                 <p className="mt-1 text-sm text-gray-500">Connect other accounts to sign in to Emergent.</p>
                 <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-700 p-4">
                    <div className="flex items-center gap-3">
                        <img src="https://www.google.com/favicon.ico" alt="Google logo" className="w-6 h-6"/>
                        <span className="text-sm font-medium">Sign in with Google</span>
                    </div>
                    <button
                        onClick={handleLinkGoogle}
                        disabled={isGoogleLinked}
                        className={`rounded-lg border px-4 py-1.5 text-sm font-semibold transition-colors ${
                          isGoogleLinked
                            ? 'cursor-not-allowed border-green-700 bg-green-900/50 text-green-300'
                            : 'border-slate-600 hover:bg-slate-700'
                        }`}
                    >
                      {isGoogleLinked ? 'Connected' : 'Connect'}
                    </button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;