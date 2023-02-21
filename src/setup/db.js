/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require("mongoose");
const config = require('config');

const db = config.get('db.url');

// TODO: Log database connection info using winston
// const logger = message => console.log(message);

module.exports = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      if(process.env.NODE_ENV === "development")
        console.log(`Connected to ${db}`)
    })
    .catch((err) => {
        if (process.env.NODE_ENV === "development")
          console.log(`Connection Erro: ${err}`);
    });
};
