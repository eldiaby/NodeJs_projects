const mongoose = require(`mongoose`);

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Task title is required'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: false,
      trim: true,
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(`Task`, taskSchema);
