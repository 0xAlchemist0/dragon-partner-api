import supabase from "./supabaseconfig";

async function fetchData(table, query) {
  const { data, error } = await supabase.from(table).select(query || null);
  return data || error;
}

export default fetchData;
