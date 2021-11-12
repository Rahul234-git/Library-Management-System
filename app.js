const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./Routes/adminRouter');

const port = 4000;

const app = express();


app.use(bodyparser.json());
app.use('/api',router);


mongoose.connect(
    "mongodb://127.0.0.1:27017/library",
    {useNewUrlParser:true, useUnifiedTopology:true}
).then(success => {
    console.log("Connected");
    app.listen(port,(req,res) => {
        console.log(`Server is running on ${port}`);
    })
}).catch(error => {
    console.log(error);
});





