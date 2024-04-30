const mongoose = require('mongoose')
const Schema = require('mongoose')



const userSchema=new mongoose.Schema({

    Borrower_id: {
      type: Schema.Types.ObjectId,
      auto : true
    },
    firstName: {
      type: String,
      required: true
    },
    LastName: {
      type: String,
      required: true
    },
    DOB: {
      type: Date,
      required: true
    },
    Address: {
      type: String,
      required: true
    },
    ContactNumber: {
      type: Number,
      required: true
    },
    PANNumber: {
      type: Number,
      required: true
    },
    CreditScore: {
      type: Number,
      required: true
    },
  });
  
  const Borrower = mongoose.model('Borrower',userSchema);

  module.exports=Borrower;