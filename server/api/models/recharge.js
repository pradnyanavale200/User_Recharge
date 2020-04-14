const mongoose = require('mongoose');

const rechargeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: String, required: true },
    packinfo: { type: String, required: true }
});

module.exports = mongoose.model('recharges', rechargeSchema);