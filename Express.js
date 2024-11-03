// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let items = []; // Хранение предметов в памяти

app.post('/add-item', (req, res) => {
  const item = req.body;
  const existingItem = items.find(i => i.type === item.type);
  
  if (existingItem) {
    existingItem.count += item.count;
  } else {
    items.push(item);
  }
  
  res.status(200).json(items);
});

app.get('/items', (req, res) => {
  res.status(200).json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});