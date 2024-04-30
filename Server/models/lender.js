const mongoose = require('mongoose')
const Schema = require('mongoose')

const userSchema =new mongoose.Schema({
  LenderID: { 
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  LenderName: {
    type: String
  },
  LenderType: {
    type: String
  },
  Amount: {
    type: Number
  },
  ContactNumber: {
    type: Number
  },
});

const Lender = mongoose.model('Lender', userSchema);

module.exports=Lender;