import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const supabaseUrl = 'https://tycsgfiiqocvpfqxkkbw.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

if (!supabaseKey) {
  throw new Error("Missing Supabase Service Role Key in environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
