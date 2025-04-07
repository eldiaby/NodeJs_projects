const dotenv = require(`dotenv`);
dotenv.config({ path: `./config.env` });

const connectDB = require(`./db/server.js`);
const { notFound } = require('./middleware/not-found.js');
const { errorHandlerMiddleware } = require(`./middleware/error-handler.js`);
const productRouter = require(`./routes/productRouter.js`);

// express async

const express = require(`express`);

const app = express();

app.use(express.json());

app.get(`/`, (req, res, next) => {
  res.send(`<h1>Store app</h1> <a href="/api/v1/products">Shop now</a>`);
});

app.use(`/api/v1/products`, productRouter);

// Middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // Connect To DB
    await connectDB();
    console.log('Database connection established successfully!');
    app.listen(port, () => {
      console.log(`App successfully started and listening on port ${port}...`);
    });
  } catch (error) {
    console.log('Error connecting to database:', error);
  }
};

start();
