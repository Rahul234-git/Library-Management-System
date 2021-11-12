const bookStore = require('../Model/Books');
const libraryTransaction = require('../Model/Library_Transactions');

const Nexmo = require('nexmo'); 

const nexmo = new Nexmo({
    apiKey: '0f393dc8',
    apiSecret: '6rxXoa1aMRl4ooN9',
});
const from = 'Rahul';
const to = '919110991894'; 
const text = "Book issue Successfully"; 
const text1 = "Book Return Successfully";



exports.savebook = (req,res) => {
    const {id,name,author,availability} = req.body;
    const newBook = new bookStore({
        _id : id,
        Name : name,
        Author : author,
        Availability_Status : availability
    })
    newBook.save().then(result => {
        res.json({
            message:"Book Added Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
}

exports.removeBook = (req,res) => {
    const {id,name,author,availability} = req.body;
    const newBook = new bookStore({
        _id : id,
        Name : name,
        Author : author,
        Availability_Status : availability
    })
    newBook.remove().then(result => {
        res.json({
            message:"Book remove Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });

}

exports.getBook = (req,res) => {
    const { bookName, author} = req.body;
    const rs =  nexmo.message.sendSms(from, to, text,
        function (error, result) {   
    
        // If some error occured
            if(error) {
              console.log("ERROR", error)
            }
        
        // If message is sent successfully
            else {
              console.log("RESULT", result)
            }
        
    });
    


    bookStore.find({
        Availability_Status:"Available",
        Name:bookName,
        Author:author

    }).then(result => {
        res.json({
            message:text,
            response:result,
            sendSms:rs
        })
    }).catch(error => {
        res.json({
            response:error
        })
    }); 
    
}

exports.returnBook = (req,res) => {
    const { bookName,author} = req.body;
    const rs1 =  nexmo.message.sendSms(from, to, text1,
        function (error, result) {   
    
        // If some error occured
            if(error) {
              console.log("ERROR", error)
            }
        
        // If message is sent successfully
            else {
              console.log("RESULT", result)
            }
        
    });

    libraryTransaction.updateOne({
        Book_details:[bookName, author],
        Due_date_of_the_book: ""
    }).then(result => {
        res.json({
            message:"Book Return Successfully",
            response:result,
            sendSms:rs1
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });



}