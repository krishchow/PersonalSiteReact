const express = require('express');
const process = require('process');
const app = express();

app.use(express.static('build'));
let port = 3000;

if (process.env.PORT) {
    port = process.env.PORT;
}

app.listen(port, () => console.log(`started, listening on ${port}`));
