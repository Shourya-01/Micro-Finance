const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); //Middleware
const bodyParser = require("body-parser"); //Middleware
const DB ="mongodb+srv://Shourya:hello01@dhandrishti.xkx1sv0.mongodb.net/?retryWrites=true&w=majority&appName=Dhandrishti"; //Users need  to be created on atlas
const EventEmitter = require("events");

EventEmitter.defaultMaxListeners = 15;

//DB CONNECTION
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to MongoDB ATLAS");
  })
  .catch((err) => console.log("no connection"));

//importing the models 
const Lender = require("./models/lender");
const Borrower = require("./models/borrower");
const Document = require("./models/document");
const Loan = require("./models/loan");
const Repayment = require("./models/repayment");
const Support = require("./models/supportticket");


const server = express();
server.use(cors()); //USED FOR SENDING OF DATA ACROSS DIFFERET SERVER
server.use(bodyParser.json());



//API to send data to db from the form of len der and loan
//post request for lender
server.post("/demo", async (req, res) => {
  try {
    // Check if the lender already exists
    const existLender = await Lender.findOne({ LemailId: req.body.email });

    if (existLender === null) {
      // Create new lender and loan documents only if the lender doesn't exist
      //first one for db second one for name in form.
      let lender = new Lender();
      let loan = new Loan();

      lender.LenderName = req.body.name;
      lender.LoanType = req.body.type;
      lender.LemailId = req.body.email;
      lender.ContactNumber = req.body.contact_number;

      loan.InterestRate = req.body.interest;
      loan.LoanAmount = req.body.amount;
      loan.duration = req.body.duration;
      loan.LemailId = req.body.email;

      const doc = await lender.save();
      const doc2 = await loan.save();

      res.json(doc);
    } else {
      // Lender already exists, return an error response or handle as needed
      res.status(400).json({ error: "Lender already exists" });
      //alert("Lender already exists");
    }
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Error saving data");
  }
});




//To post data in Borrower collection
server.post("/demo2", async (req, res) => {
//  first one for db second one for name given in form
  const lenderEmail = req.body.Lemail;
  let borrower = new Borrower();
  borrower.Name = req.body.name;
  borrower.DOB = req.body.DOB;
  borrower.Address = req.body.address;
  borrower.ContactNumber = req.body.phno;
  borrower.PANNumber = req.body.PAN;
  borrower.BemailId = req.body.email;
  borrower.LemailId = req.body.Lemail.Cardemail;
  const doc3 = await borrower.save();
  
  const loan = await Loan.updateOne(
    { LemailId: req.body.Lemail.Cardemail}, // Update document with this _id
    { $set: { BemailId: req.body.email  } } // Set the name to "John" and age to 30
 )
  loan.BemailId = req.body.email;
  //const updatedLoan = await loan.save();

   res.json(doc3);

  //console.log(loan);
});


function mergeObjectsWithCommonField(arr1, arr2, commonField) {
  const mergedArray = [];

  arr1.forEach((item1) => {
    const matchingItem = arr2.find(
      (item2) => item1[commonField] === item2[commonField]
    );
    if (matchingItem) {
      const mergedItem = { ...item1._doc, ...matchingItem._doc }; // Merging document properties
      mergedArray.push(mergedItem);
    }
  });

  return mergedArray;
}
//to get data in cards
server.get("/demo", async (req, res) => {
  const docs = await Lender.find({});
  const docs2 = await Loan.find({});
  const mergedDocs = mergeObjectsWithCommonField(docs, docs2, "Lemailid");
  res.json(mergedDocs);
  //console.log(mergedDocs);
});

//request page get request for borrowers banner
server.get('/demo2',async (req,res)=>{
  const docs4 = await Borrower.find({});
  res.json(docs4); 
})


//api to delete borrower data when rejected
server.delete('/api/data/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Find the data by ID and delete it
    await Borrower.deleteOne({ LemailId: id });
    res.sendStatus(204); // No content, successful deletion
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).send('Error deleting data');
  }
});

//updating the BemaiId in loan table when borrower request is rejected
server.post('/api/update/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Find the data by ID and delete it
    await Loan.updateOne( { LemailId: id}, // Update document with this _id
    { $set: { BemailId: ""  } });
    res.sendStatus(204); // No content, successful deletion
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).send('Error deleting data');
  }
});

//PORT ON WHICH BACKEND SERVER IS RUNNING
server.listen(8080, () => {
  console.log("Backend server Started");
});
