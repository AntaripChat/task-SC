const mongoose = require('mongoose');

const products = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description:{
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    productDetails:[{
        size:{
            type: String
        },
        brand:{
            type: String
        },
        color:{
            type: String
        }
    }],
    cities: {
        require:true,
        type: String,  
    }
    
});
/*
    {
        "name": "iPhone 10",
        "description": "An apple mobile which is nothing like apple",
        "price": 649,
        "productDetails":[{
            "size":"5.8 inches",
            "brand": "Apple",
            "color": "Black"
        }],
        "cities": "Kolkata",
    }
*/
module.exports = mongoose.model('Products', products)