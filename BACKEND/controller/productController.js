
const Product = require('../models/productModel')

// creat product -- Admin

exports.creatProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

/// get product 

exports.getAllProducts = async (req, res) => {
  /*  const product = await Product.find()
    res.status(200).json({
        success: true,
        product
    })
}*/
try {
 
    // Adding Pagination
    const {page = 1 ,limit = 10}=req.query
    const posts = await Product.find()
        .limit(limit*1)
        .skip((page-1)*limit);
    res.status(200).send(posts);
} catch (e) {
    console.log(e);
}

}

//update product 

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            massage: "product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModified: false
    })

    res.status(200).json({
        success: true,
        product,
        massage: "product updeted succesfully"
    })
}


/// delete product

exports.deleteProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            massage: "product not found"
        })
    }
    await product.remove();
    res.status(200).json({
        success: true,
        massage: "product deleted succesfully"
    })
}
