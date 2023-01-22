const {home,data,showdata} = require('../controller')

module.exports = function(app){
    app.get('/',home);
    app.post('/help',data);
    app.get('/show',showdata);
}