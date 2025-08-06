import supabase from "./supabaseconfig";

//data must always be a json

async function insertData(data, table) {
  const { error } = await supabase.from(table).insert(data);
}

export default insertData;
