const express = require('express');
const cors = require('cors');

const db = require('./database');

const app = express();

app.use(cors());

app.use('/cards', (req, res) => {
  res.json(db.cards.cardItems);
});

app.use('/deliveries', (req, res) => {
  res.json(db.delivery.deliveryItems);
});

app.use('/', (req, res) => {
  res.send('<h1>Main Path</h1>');
});

app.listen(3500);
