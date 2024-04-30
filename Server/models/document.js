const mongoose = require('mongoose')
const Schema = require('mongoose')

const userSchema = new mongoose.Schema({

    Document_id: {
      type: Schema.Types.ObjectId,
      auto: true
    },
    Documenttype: {
      type: String,
      required: true
    },
    BorrowerID: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Borrower'
    },
  });
  
  const Document = mongoose.model('Document', userSchema);
  
  module.exports=Document;