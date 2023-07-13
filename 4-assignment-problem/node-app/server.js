const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from inside the very basic Node app!, deployed and devloped using docker tech</h1>
  `);
})

app.listen(3000);