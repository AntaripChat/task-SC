const mongoose = require('mongoose');
const {DB_URL} = require('./index');

mongoose.set("strictQuery", false);
mongoose.connect(DB_URL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})