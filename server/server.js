const express = require("express");

const db = require("./database");

const app = express();

app.use("/deliveries", (req, res) => {
  res.send(db.delivery.deliveryItems);
});

app.use("/", (req, res) => {
  res.send("<h1>Main Path</h1>")
});

app.listen(3500);