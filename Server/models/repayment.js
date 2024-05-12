const mongoose = require("mongoose");
const Schema = require("mongoose");
const Borrower = require("./borrower");

const userSchema = new mongoose.Schema({
  RepaymenDate: {
    type: Date,
  },
  repAmount: {
    type: Number,
  },
  Loan_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Loan",
  },
  BemailId: {
    type: String,
    ref: Borrower,
  },
});

const Repaymnent = mongoose.model("Repayment", userSchema);

module.exports = Repaymnent;
