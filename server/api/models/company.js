const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyname: { type: String, required: true }
});



module.exports = mongoose.model('companys', studentSchema);