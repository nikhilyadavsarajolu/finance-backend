// models/Record.js
const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  amount: Number,
  type: {
    type: String,
    enum: ['INCOME', 'EXPENSE']
  },
  category: String,
  date: Date,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Record', recordSchema);