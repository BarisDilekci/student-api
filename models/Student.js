const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    tc_number: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} geçerli bir tam sayı değil!'
        }
    },
    date_of_birth: { type: String, required: true } 
});


const Student = mongoose.model('Student', StudentSchema);

module.exports = Student; 
