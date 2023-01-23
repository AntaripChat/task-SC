const {productsData,showdata} = require('../controller/product.controller');

module.exports = function(app){
    app.get('/api/products',showdata);
    app.post('/api/addproducts',productsData);
};