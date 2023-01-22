const app = require('./app');
const {PORT} = require('./config');
require('./routes/home.routes')(app);
require('./routes/product.routes')(app);
require('./config/db');

app.listen(PORT,()=>console.log(`Running on http://localhost:${PORT}`));


