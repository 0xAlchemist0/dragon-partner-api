import supabase from "./supabaseconfig.js";

async function fetchData(table, query) {
  const { data, error } = await supabase.from(table).select(query || null);
  console.log(data);
  return data || error;
}

export default fetchData;
