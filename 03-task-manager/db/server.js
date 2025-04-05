// const path = require(`node:path`);

const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../config.env` });

const mongoose = require(`mongoose`);

const URI = process.env.DBCONECTSTRING.replace(
  '<db_username>',
  process.env.DB_USERNAME
)
  .replace('<db_password>', process.env.DB_PASSWORD)
  .replace(`<project_name>`, process.env.PROJECT_NAME);

const connectDB = () => {
  console.log(`Connecting to database is prossecing...`);

  return mongoose.connect(URI);
};

module.exports = connectDB;
