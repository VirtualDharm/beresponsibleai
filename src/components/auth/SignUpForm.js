import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const SignUpForm = ({ onSwitchToSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setMessage('');

    const { error } = await supabase.auth.signUp({ email, password });

    setLoadingSubmit(false);
    if (error) {
      setMessage(`❌ ${error.message}`);
    } else {
      setMessage('✅ Sign-up successful! Please check your email for verification.');
    }
  };

  return (
    <div className="w-full max-w-md bg-[#1e293b]/80 rounded-2xl shadow-2xl p-8 border border-slate-700 backdrop-blur-sm">
      <h2 className="text-3xl font-semibold text-center text-white mb-6 font-brockmann">
        Create Your Account ✨
      </h2>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-slate-300">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full mt-1 p-3 border border-slate-700 rounded-xl bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-300">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full mt-1 p-3 border border-slate-700 rounded-xl bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          disabled={loadingSubmit}
          className="mt-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loadingSubmit ? 'Creating account...' : 'Create Account'}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-red-400">{message}</p>}
      <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account?{' '}
        <button onClick={onSwitchToSignIn} className="font-medium text-green-600 hover:underline dark:text-green-400 focus:outline-none">
          Sign In
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;
