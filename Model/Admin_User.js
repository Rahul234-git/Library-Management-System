const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminUserSchema = new Schema({
    Username: {
        type:String,
        required:true
    },
    Name: {
        type:String,
        required:true
    },
    Password: {
        type:String,
        required:true
    },
    Email: {
        type:String,
        required:true
    },
    Contact_Number: {
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model("",adminUserSchema,"Admin_User");