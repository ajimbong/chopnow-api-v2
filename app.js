/* eslint-disable import/no-extraneous-dependencies */
require('express-async-errors');
const express = require('express');
require("dotenv").config();
const config = require('config');

const app = express();
const port = config.get('port')

require('./src/setup/db')();
require('./src/setup/routes')(app);

// eslint-disable-next-line no-console
module.exports = app.listen(port, () => console.log(`App running on port:${port} 🔥🔥🚀`));