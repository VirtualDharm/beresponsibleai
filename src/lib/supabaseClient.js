import { createClient } from '@supabase/supabase-js';

const REACT_APP_SUPABASE_URL='https://lwsntorgnveycdybbjhb.supabase.co'
const REACT_APP_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3c250b3JnbnZleWNkeWJiamhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwOTE0NjUsImV4cCI6MjA3NzY2NzQ2NX0.p2UnENtXdsnJWu3MRsqmceHiEcHhX0Q9OQJGV-1wb0c'

const supabaseUrl = REACT_APP_SUPABASE_URL;
const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl, 'type:', typeof supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey, 'type:', typeof supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// https://lwsntorgnveycdybbjhb.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3c250b3JnbnZleWNkeWJiamhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwOTE0NjUsImV4cCI6MjA3NzY2NzQ2NX0.p2UnENtXdsnJWu3MRsqmceHiEcHhX0Q9OQJGV-1wb0c