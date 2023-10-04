const express = require('express');

const bodyParser = require('body-parser');

require('dotenv').config();

const router = require('./routes/router');

const app = express();

const port = 40000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});