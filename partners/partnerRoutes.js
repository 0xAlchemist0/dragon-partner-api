// userRoutes.js
const express = require("express");
const { default: insertData } = require("../supabase/inserts");
const { mockPartners } = require("../supabase/mockPartners");
const { default: fetchData } = require("../supabase/fetch");
const partnerRoutes = express.Router();

//gets all
partnerRoutes.get("/", async (req, res) => {
  const fetchResult = await fetchData("partners", null);
  res.send(fetchResult);
});

//inserts a partner
partnerRoutes.post("/insert", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertData(req.body, "partners");
    res.send(result);
  } catch (error) {
    res.send("Error inserting partner!");
  }
});

//mockfills for testing purposes

partnerRoutes.get("/mockfill", async (req, res) => {
  // Use Promise.all to await all async operations
  const fillResult = async () => {
    const insertPromises = mockPartners.map((item) => {
      return insertData(item, "partners"); // Don't stringify!
    });
    await Promise.all(insertPromises);
  };

  await fillResult();
  res.send("Inserted mock partners.");
});

module.exports = partnerRoutes;
