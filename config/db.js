const mongoose = require('mongoose');
const { MONGO_URL } = require('./index');

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL).then(() => {
    console.log('DB connected');
}).catch((err) => {
    console.log(err);
})