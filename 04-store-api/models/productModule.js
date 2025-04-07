const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'The product name must be provided'],
      trim: true,
      minlength: [3, 'The product name must be at least 3 characters long'],
      maxlength: [30, 'The product name must be shorter than 30 characters'],
    },
    price: {
      type: Number,
      required: [true, 'The product price must be provided'],
      min: [0, 'The product price must be greater than or equal to 0'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
      min: [0, 'Rating cannot be less than 0'],
      max: [5, 'Rating cannot be greater than 5'],
    },
    company: {
      type: String,
      enum: {
        values: ['Ikea', 'Liddy', 'Caressa', 'Marcos'],
        message:
          'The company name "{value}" is not valid. Please choose one of the following: ikea, liddy, caressa, or marcos.',
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
