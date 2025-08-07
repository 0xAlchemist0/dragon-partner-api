import { createClient } from "@supabase/supabase-js";
import { configDotenv } from "dotenv";
const supabaseUrl = "https://wtrclmuujchiyodjhszr.supabase.co";
configDotenv();
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
