const mongoose = require('mongoose');

const URI = process.env.DBCONECTSTRING.replace(
  '<db_username>',
  process.env.DB_USERNAME
)
  .replace('<db_password>', process.env.DB_PASSWORD)
  .replace('<project_name>', process.env.PROJECT_NAME);

const connectDB = () => {
  console.log('Establishing a connection to the database...');

  // mongoose.connection.once('open', () => {
  //   console.log('Database connected successfully!');
  // });

  // mongoose.connection.on('error', (err) => {
  //   console.log('Error connecting to the database:', err);

  return mongoose.connect(URI);
};

module.exports = connectDB;
