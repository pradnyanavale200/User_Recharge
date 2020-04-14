const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mobileno: { type: String, required: true },
    company: { type: String, required: true },
    amount: { type: String, required: true }
});

module.exports = mongoose.model('transaction', transactionSchema);