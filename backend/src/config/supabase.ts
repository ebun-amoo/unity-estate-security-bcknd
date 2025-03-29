import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;


if (!supabaseKey) {
  throw new Error("Missing Supabase Service Role Key in environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
