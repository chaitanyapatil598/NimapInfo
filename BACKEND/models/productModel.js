
const mongoose = require("mongoose")

const productSchema =  mongoose.Schema({
    productId: {
        type: Number,
        required: [true, "product ID require"],
        
    },
    productName: {
        type: String,
        ref: 'productName',
        required: [true, 'Please enter product name require'],
      
    },
    categoryName: {
        type: String,
        ref: 'categoryName',
        required: [true, 'Please Category name require'],
      
    },
    categoryId: {
        type: Number,
        required: [true, "Category ID require"],    
    },
 
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model("product", productSchema)