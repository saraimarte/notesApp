import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldvljgbxpyeoncziylbo.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkdmxqZ2J4cHllb25jeml5bGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMTQ0NTEsImV4cCI6MjA1MDU5MDQ1MX0.N5qVHZXGPZ30qIsgLo0MACSZStcMVtgkv7I_E9lfyq8'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: true,
      storage: {
        getItem: (key) => document.cookie.split('; ').find(row => row.startsWith(key + '='))?.split('=')[1],
        setItem: (key, value) => document.cookie = `${key}=${value}; path=/;`,
        removeItem: (key) => document.cookie = `${key}=; Max-Age=-99999999; path=/;`,
      },
    },
  });