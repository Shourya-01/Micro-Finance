const { MfaRequiredError } = require("@auth0/auth0-react");
const mongoose = require("mongoose");
const Schema = require("mongoose");

const userSchema = new mongoose.Schema({
  LenderName: {
    type: String,
  },
  LoanType: {
    type: String,
  },
  LemailId: {
    type: String,
  },
  ContactNumber: {
    type: Number,
  },
});

const Lender = mongoose.model("Lender", userSchema);

module.exports = Lender;
