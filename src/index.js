const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hola: "testing" });
});

app.listen(3000, (err) => {
  if (err) console.log("Error: " + err);
  console.log("Connected: " + 3000);
});
