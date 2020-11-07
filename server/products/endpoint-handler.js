const makeProductList = require( './product-list')
const makeProductsEndpointHandler = require( './products-endpoint')
const Product = require("../models/product");

const productList = makeProductList(Product)
const productsEndpointHandler = makeProductsEndpointHandler({ productList })

module.exports = productsEndpointHandler