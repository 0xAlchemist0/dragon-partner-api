// userRoutes.js
const express = require("express");
const { default: insertData } = require("../supabase/inserts");
const { mockPartners } = require("../supabase/mockPartners");
const partnerRoutes = express.Router();

partnerRoutes.get("/", (req, res) => {
  res.send("Gets all all partners");
});

partnerRoutes.get("/mockfill", (req, res) => {
  const fillResult = async () => {
    mockPartners.map((item) => {});
  };
  fillResult();
});

partnerRoutes.post("/", (req, res) => {
  res.send("Create a new user");
});

module.exports = partnerRoutes;
