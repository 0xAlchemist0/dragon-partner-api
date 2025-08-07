const { mockTransactions } = require("../supabase/mockTransactions");

const express = require("express");

const { default: fetchData } = require("../supabase/fetch");
const { default: insertData } = require("../supabase/inserts");
const transactionRoutes = express.Router();

transactionRoutes.get("/", async (req, res) => {
  const data = await fetchData("transactions", null);
  console.log(data);
  res.send(data);
});

transactionRoutes.post("/insert", async (req, res) => {
  try {
    const { body } = req;
    const result = await insertData(body, "transactions");
    res.send(result);
  } catch (error) {
    res.send("Error");
  }
});

transactionRoutes.get("/mockfill", async (req, res) => {
  const fillResult = async () => {
    const insertPromises = mockTransactions.map((item) => {
      console.log(item);
      return insertData(item, "transactions"); // Don't stringify!
    });
    await Promise.all(insertPromises);
  };

  await fillResult();
  res.send("Inserted transactions");
});

module.exports = transactionRoutes;
