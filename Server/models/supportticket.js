const mongoose = require('mongoose')
const Schema = require('mongoose')

const userSchema = new mongoose.Schema({

    TicketID: {
      type: Schema.Types.ObjectId,
      auto: true
    },
    IssueDesc: {
      type: String
    },
    Status: {
      type: String
    },
    BorrowerID: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Borrower'
    }
  });
  
  const Support = mongoose.model('Support', userSchema);

  module.exports = Support;