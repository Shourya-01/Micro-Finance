const mongoose = require('mongoose')
const Schema = require('mongoose')


const userSchema = new mongoose.Schema({
    Repayment_id: {
      type: Schema.Types.ObjectId,
      auto: true
    },
    RepaymenDate: {
      type: Date
    },
    Amount: {
      type: Number
    },
    Loan_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Loan'
    }
  });
  
  const Repaymnent = mongoose.model('Repayment', userSchema);

  module.exports = Repaymnent;