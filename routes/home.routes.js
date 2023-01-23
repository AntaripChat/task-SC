const {home,notFound} = require('../controller/index.controller')

module.exports = function(app){
    app.get('/',home);
    //app.get('*',notFound)
    // app.post('/help',data);
    // app.get('/show',showdata);
}