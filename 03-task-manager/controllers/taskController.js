const Task = require(`./../modules/taskModule.js`);
const { asyncWrapper } = require(`./../middleware/asyncWrapper.js`);
const { createCustumeError } = require(`./../errors/CustumError.js`);

module.exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}).select('title completed');

  res.status(200).json({
    status: `success`,
    result: tasks.length,
    data: { tasks },
  });
});

module.exports.getTask = asyncWrapper(async (req, res, next) => {
  const taskID = req.params.id;
  const task = await Task.findById(taskID).select('-__v');

  if (!task) {
    return next(
      createCustumeError(`There is no task with that ID: ${taskID}`, 404)
    );

    // return res.status(404).json({
    //   status: `fail`,
    //   message: `There is no task with that ID: ${taskID}`,
    // });
  }

  res.status(200).json({
    status: `success`,
    data: { task },
  });
});

module.exports.createTask = asyncWrapper(async (req, res) => {
  const newTask = await Task.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newTask,
    },
  });
});

module.exports.updateTask = asyncWrapper(async (req, res, next) => {
  const newTask = req.body;
  const taskID = req.params.id;

  const task = await Task.findByIdAndUpdate(taskID, newTask, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(
      createCustumeError(`There is no task with that ID: ${taskID}`, 404)
    );

    // return res.status(404).json({
    //   status: `fail`,
    //   message: `There is no task with that ID: ${taskID}`,
    // });
  }

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

module.exports.deleteTask = asyncWrapper(async (req, res, next) => {
  const taskID = req.params.id;

  const task = await Task.findByIdAndDelete(taskID);

  if (!task) {
    return next(
      createCustumeError(`There is no task with that ID: ${taskID}`, 404)
    );
    // return res.status(404).json({
    //   status: `fail`,
    //   message: `There is no task with that ID: ${taskID}`,
    // });
  }

  res.status(204).json({
    status: 'success',
    data: {
      task: null,
    },
  });
});
