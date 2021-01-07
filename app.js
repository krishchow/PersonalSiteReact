const express = require('express');
const process = require('process');
const app = express();

app.use(express.static('build'));
let port = process.env.PORT || 3000;

app.listen(port, () => console.log(`started, listening on ${port}`));
