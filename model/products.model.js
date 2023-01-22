const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
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
    
})
//Size, Brand, Color
module.exports = mongoose.model('Data', dataSchema)