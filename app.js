const express = require("express");
const sayings = require("./data/sayings");

const app = express();

app.get("/sayings", (req, res) => {
  res.json(sayings);
});

app.get("/sayings/random", (req, res) => {
  res.json(sayings[Math.floor(Math.random() * sayings.length)]);
});

app.get("/sayings/:id", (req, res) => {
  res.json(sayings.find((saying) => saying.id == req.params.id));
});

module.exports = app;
