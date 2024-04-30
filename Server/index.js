const express = require('express')
const mongoose = require('mongoose') 
const cors = require('cors')//Middleware
const bodyParser = require('body-parser')//Middleware
const DB ='mongodb+srv://Username:password@dhandrishti.xkx1sv0.mongodb.net/?retryWrites=true&w=majority&appName=Dhandrishti'//Users need  to be created on atlas
const EventEmitter = require('events');

EventEmitter.defaultMaxListeners = 15;


//DB CONNECTION
mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB ATLAS');
  }).catch((err) => console.log('no connection'));
  
const Lender = require('./models/lender');
const Borrower = require('./models/borrower');
const Document = require('./models/document');
const Loan = require('./models/loan');
const Repayment = require('./models/repayment');
const Support = require('./models/supportticket');


const server = express();
server.use(cors()); //USED FOR SENDING OF DATA ACROSS DIFFERET SERVER
server.use(bodyParser.json());


//API to send data to db from the form
server.post('/demo',async (req,res)=>{

    //first one for db second one for name given in form
    let lender = new Lender()
    lender.LenderName = req.body.username;
    lender.LenderType = req.body.type;
    lender.Amount = req.body.amount;
    lender.ContactNumber = req.body.phno;
    const doc = await lender.save();

    console.log(doc)
    res.json(doc);
})

//to get data in cards
server.get('/demo',async (req,res)=>{
    const docs = await Lender.find({});
    res.json(docs); 
})


//PORT ON WHICH BACKEND SERVER IS RUNNING
server.listen(8080,()=>{
    console.log('Backend server Started')
})     