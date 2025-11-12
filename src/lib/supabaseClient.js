import { createClient } from '@supabase/supabase-js';

const REACT_APP_SUPABASE_URL='https://fecbgxzbkvyskptgpssv.supabase.co'
const REACT_APP_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlY2JneHpia3Z5c2twdGdwc3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MjYzOTQsImV4cCI6MjA3ODUwMjM5NH0.Dj1zC7oJRzqU1OimS7VYm6wPbOxSXOsflGKTl4tu-8Y'

const supabaseUrl = REACT_APP_SUPABASE_URL;
const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl, 'type:', typeof supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey, 'type:', typeof supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);