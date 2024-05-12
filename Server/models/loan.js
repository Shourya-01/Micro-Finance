const mongoose = require("mongoose");
const Schema = require("mongoose");

const userSchema = new mongoose.Schema({
  LoanAmount: {
    type: Number,
  },
  InterestRate: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  Status: {
    type: Boolean,
    default: false,
  },
  // ApplicationDate: {
  //   type: Date
  // },
  // ApprovalDate: {
  //   type: Date
  // },
  // Status: {
  //   type: String
  // },
  BemailId: {
    type: String,
    ref: "Borrower",
  },
  LemailId: {
    type: String,
    ref: "Lender",
  },
});

const Loan = mongoose.model("Loan", userSchema);

module.exports = Loan;
