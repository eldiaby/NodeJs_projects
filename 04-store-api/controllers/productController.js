const asyncHandler = require('express-async-handler');
const Product = require(`./../models/productModule.js`);

module.exports.getAllProductsStatic = asyncHandler(async (req, res, next) => {
  // let { fields } = req.query;
  const query = { ...req.query };

  res.status(200).json({
    query,
  });

  // if (!fields) {
  //   fields = `name, price, featured, rating, company, createdAt, updatedAt`;
  // }
  // fields = fields.replace(`__v`, ``).replaceAll(`,`, ` `) + ` -_id`;
  // const products = await Product.find().select(fields);

  // res.status(200).json({
  //   status: 'success',
  //   success: true,
  //   length: products.length,
  //   data: {
  //     products,
  //   },
  // });

  //   res.send(
  //     `<h1>This is get all products testing router</h1> <a href="/">Back to home page</a>
  // <ul>
  // ${products.map((product) => `<li>${product.name}</li>`)}
  // </ul>
  //     `
  //   );
});

// ======================================================================================== //

module.exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const { featured, price, company, name, sort } = req.query;
  console.log(req.query);
  const queryObj = {};

  if (featured) {
    queryObj.featured = featured === 'true' ? true : false;
  }
  if (price) {
    console.log(price);
    queryObj.price = +price;
  }

  if (company) {
    queryObj.company = company;
  }

  if (name) {
    queryObj.name = { $regex: name, $options: 'i' };
  }

  let result = Product.find(queryObj);

  let sortList;

  // Sorting
  if (sort) {
    sortList = sort.replaceAll(`,`, ` `).toLowerCase();
  } else {
    sortList = `createdAt`;
  }

  // filter fields
  let { fields } = req.query;

  if (!fields) {
    fields = `name, price, featured, rating, company, createdAt, updatedAt`;
  }
  fields = fields.replace(`__v`, ``).replaceAll(`,`, ` `) + ` -_id`;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const products = await result
    .sort(sortList)
    .select(fields)
    .skip(skip)
    .limit(limit)
    .lean();

  res.status(200).json({
    status: 'success',
    length: products.length,
    data: {
      products,
    },
  });
});
