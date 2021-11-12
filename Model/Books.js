const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    _id:{
        type:Number,
        required:true

    },
    Name: {
        type:String,
        required:true
    },
    Author: {
        type:String,
        required:true
    },
    Availability_Status: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model("bookStore",BooksSchema,"Books");