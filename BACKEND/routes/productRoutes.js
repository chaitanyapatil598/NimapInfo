const express = require('express')
const { getAllProducts,creatProduct, updateProduct, deleteProduct } = require('../controller/productController')


const router =  express.Router()

router.route("/product").get(getAllProducts);
router.route("/product/new").post(creatProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct)

module.exports = router