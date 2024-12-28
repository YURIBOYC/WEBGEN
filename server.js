
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(__dirname));

app.get('/api/breeds', (req, res) => {
  fs.readFile(path.join(__dirname, 'breeds.json'), (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
