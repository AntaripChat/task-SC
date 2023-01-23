const {productsData,showdata,productByCities} = require('../controller/product.controller');

module.exports = function(app){
    app.get('/api/products',showdata);
    app.get('/api/products/city/:key',productByCities);
    app.post('/api/addproducts',productsData);
};