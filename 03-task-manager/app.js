const express = require('express');
const taskRouter = require('./routes/taskRoutes.js');
const connectDB = require('./db/server.js');
const { notFound } = require('./middleware/not-found.js');
const { errorHandlerMiddleware } = require('./middleware/errorHandler.js');

const app = express();

// Middle wares

// Parse the requiste
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tasks', taskRouter);

app.use(notFound);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const startApp = async () => {
  try {
    await connectDB();
    console.log(`Database has been connected successfly.`);
    app.listen(port, () => {
      console.log(`The server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
