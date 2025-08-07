// userRoutes.js
const express = require("express");
const { default: insertData } = require("../supabase/inserts");
const { mockPartners } = require("../supabase/mockPartners");
const partnerRoutes = express.Router();

partnerRoutes.get("/", (req, res) => {
  res.send("Gets all all partners");
});
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

partnerRoutes.post("/", (req, res) => {
  res.send("Create a new user");
});

module.exports = partnerRoutes;
