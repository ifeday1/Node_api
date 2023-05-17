const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'please enter a product quantity']
        },
        quantity:{
            type: Number,
            required : true,
            default:0
        },
        price: {
            type:Number,
            required:true
        },
        image: {
            type:String,
            required:false
        }
    },
)

const Product = mongoose.model('Product', productSchema)

modules.export = Product;