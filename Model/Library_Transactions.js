const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const librarySchema = new Schema({
    User_details_of_the_transaction: {
        type:String,
        required:true
    },
    Book_details: {
        type:Array,
        required:true
    },
    Due_date_of_the_book: {
        type:Date,
        required:true
    },
    transaction_status: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model("",librarySchema,"Library_Transactions");