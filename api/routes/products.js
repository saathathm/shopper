const express = require('express');
const { getAllProducts, getRandomProducts, getWomenPopular, getRelatedProduct } = require('../controllers/productController');
const router = express.Router();


router.get('/', getAllProducts);
router.get('/randomly', getRandomProducts);
router.get('/women-popular', getWomenPopular);
router.get('/related/:productCategory/:dynamicNumber', getRelatedProduct);

module.exports = router;