const express = require("express");

const app = express();

const port = 3000;
const partnerRoutes = require("./partners/partnerRoutes");
const { configDotenv } = require("dotenv");
const transactionRoutes = require("./transactions/transactionRoutes");
configDotenv();
console.log(process.env.SUPABASE_KEY);
//should have a api key for access

app.get("/", (req, res) => {
  res.send("Welcome to the registry");
});

//used to upload update and get partners
app.use(express.json());
app.use("/partners", partnerRoutes);
app.use("/transactions", transactionRoutes);

app.listen(port, () => {
  console.log("Dragon registry is live");
});
