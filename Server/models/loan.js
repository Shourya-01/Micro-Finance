const mongoose = require('mongoose')
const Schema = require('mongoose')

const userSchema= new mongoose.Schema({

    Loan_id: {
      type: Schema.Types.ObjectId,
      auto:true
    },
    LoanAmount: {
      type: Number
    },
    InterestRate: {
      type: Number
    },
    terminMonths: {
      type: Number
    },
    ApplicationDate: {
      type: Date
    },
    ApprovalDate: {
      type: Date
    },
    Status: {
      type: String
    },
    Borrower_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Borrower'
    },
    LenderID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Lender'
    }
  });
  
  const Loan = mongoose.model('Loan', userSchema);

  
module.exports=Loan;