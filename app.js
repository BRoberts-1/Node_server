const express = require("express");
const sayings = require("./data/sayings");

const app = express();

app.get("/sayings", (req, res) => {
  res.json(sayings);
});

module.exports = app;
