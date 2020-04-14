const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    mobileno: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    transactionpassword :{ type: String, required: true },
    balance :{ type: String, required: true }
});

module.exports = mongoose.model('customer', userSchema);