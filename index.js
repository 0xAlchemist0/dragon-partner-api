const express = require("express");

const app = express();

const port = 3000;
const partnerRoutes = require("./partners/partnerRoutes");
const { configDotenv } = require("dotenv");
configDotenv();
console.log(process.env.SUPABASE_KEY);
//should have a api key for access

app.get("/", (req, res) => {
  res.send("Welcome to the registry");
});

//used to upload update and get partners

app.use("/partners", partnerRoutes);

app.listen(port, () => {
  console.log("Dragon registry is live");
});
