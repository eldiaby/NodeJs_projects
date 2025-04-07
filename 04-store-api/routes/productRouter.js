// import {
//   getAllProducts,
//   getAllProductsStatisc,
// } from '../controllers/productController';

const productController = require(`./../controllers/productController.js`);

const express = require(`express`);

const router = express.Router();

router.route(`/`).get(productController.getAllProducts);
router.route(`/static`).get(productController.getAllProductsStatic);

module.exports = router;
