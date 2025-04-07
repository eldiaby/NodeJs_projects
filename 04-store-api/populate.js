const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const connectDB = require('./db/server.js');
const Product = require('./models/productModule.js');
const products = require('./db/product-fake-data.js');

console.log(products.length);

// Function to delete existing products
const deleteProducts = async () => {
  try {
    console.log('🗑️ Deleting existing products...');
    const deleteResult = await Product.deleteMany({});
    if (deleteResult.deletedCount === 0) {
      console.log('🔴 No products were found to delete.');
    } else {
      console.log(
        `✅ Successfully deleted ${deleteResult.deletedCount} products.`
      );
    }
  } catch (error) {
    console.error(`❌ Error during product deletion: ${error.message}`);
    throw error; // Rethrow error to be caught in the main catch block
  }
};

// Function to create new products
const createProducts = async () => {
  try {
    console.log('📦 Creating new products...');
    const createResult = await Product.create(products);
    console.log(`✅ Successfully created ${createResult.length} new products.`);
  } catch (error) {
    console.error(`❌ Error during product creation: ${error.message}`);
    throw error; // Rethrow error to be caught in the main catch block
  }
};

// Main function to connect to DB and execute tasks
const start = async () => {
  let exitCode = 0; // Variable to determine the exit status
  const args = process.argv.slice(2); // Get the arguments from the command line (skip first 2)

  try {
    // Connect to the database
    await connectDB();
    console.log('🔗 Database connection established successfully!');

    // Check command-line arguments and run the appropriate task
    if (args.includes('--delete')) {
      // Delete existing products if --delete argument is passed
      await deleteProducts();
    } else if (args.includes('--create')) {
      // Create new products if --create argument is passed
      await createProducts();
    } else if (args.includes('--delete-and-create')) {
      // Delete and create products if --delete-and-create argument is passed
      await deleteProducts();
      await createProducts();
    } else {
      console.log(
        '❌ No valid command provided. Use --delete to delete products, --create to add products, or --delete-and-create to delete and add products.'
      );
    }
  } catch (error) {
    console.error(`❌ Error during database operation: ${error.message}`);
    exitCode = 1; // Set exitCode to 1 in case of error
  } finally {
    // Close the database connection after all tasks are done
    console.log('🔚 Database connection closing...');
    // Close the connection properly using mongoose.connection.close()
    await mongoose.connection.close();
    console.log('🔚 Database connection successfully closed.');

    console.log('🔚 Operation finished.');
    process.exit(exitCode); // Exit with appropriate status code
  }
};

start();
