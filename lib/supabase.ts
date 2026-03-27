import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

let supabase: SupabaseClient | null = null;

try {
  if (supabaseUrl && supabaseUrl.startsWith("http")) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch {
  // Supabase not configured — email capture will silently fail
}

export { supabase };
