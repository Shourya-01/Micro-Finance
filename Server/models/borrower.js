const mongoose = require("mongoose");
const Schema = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  DOB: {
    type: Date,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  ContactNumber: {
    type: Number,
    required: true,
  },
  PANNumber: {
    type: String,
    required: true,
  },
  BemailId: {
    type: String,
    required: true,
  },
  LemailId: {
    type: String
  },
});

const Borrower = mongoose.model("Borrower", userSchema);

module.exports = Borrower;
