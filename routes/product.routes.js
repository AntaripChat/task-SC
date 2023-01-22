const {products,addproducts} = require('../controller/product.controller');

module.exports = function(app){
    app.get('/api/products',products);
    app.post('/api/addproducts',addproducts);
};