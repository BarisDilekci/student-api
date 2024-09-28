const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String, required: true },        
    lastname: { type: String, required: true },
    tc_no: { type: String, required: true, unique: true }, 
    date_of_birth: { type: Date, required: true }   
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student; 
