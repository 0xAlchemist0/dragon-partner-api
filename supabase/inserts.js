import supabase from "./supabaseconfig.js";

async function insertData(data, table) {
  const { error } = await supabase.from(table).insert([data]); // Wrap in array
  if (error) {
    console.error("Insert error:", error);
    return "Error on insert";
  } else {
    console.log("Success inserting:", data.name);
    return "Insert Success";
  }
}

export default insertData;
