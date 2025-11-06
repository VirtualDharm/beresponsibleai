import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const SignInForm = ({ onSwitchToSignUp }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoadingSubmit(false);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('✅ Signed in successfully!');
      // Navigate to dashboard on success
      navigate('/dashboard');
    }
  };

  return (
    <div className="w-full max-w-md bg-[#1e293b]/80 rounded-2xl shadow-2xl p-8 border border-slate-700 backdrop-blur-sm">
      <h2 className="text-3xl font-semibold text-center text-white mb-6 font-brockmann">
        Welcome Back 👋
      </h2>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-slate-300">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full mt-1 p-3 border border-slate-700 rounded-xl bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            className="w-full mt-1 p-3 border border-slate-700 rounded-xl bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={loadingSubmit}
          className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loadingSubmit ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-red-400">{message}</p>}
      <p className="mt-6 text-center text-sm text-slate-400">
        Don’t have an account?{' '}
        <button onClick={onSwitchToSignUp} className="font-medium text-indigo-400 hover:underline focus:outline-none">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default SignInForm;
