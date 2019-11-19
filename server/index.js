const express = require('express')
const bodyParser = require('body-parser')
const db = require('../database/index.js')
const router = require('./router.js')

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use('/', router);

app.use(express.static(__dirname + "/../client/dist"))

app.listen(port, () => {console.log(`you're listening to ${port}`)})





