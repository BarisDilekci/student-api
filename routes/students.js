const express = require('express'); 
const { 
    addStudent, 
    getAllStudents,
    deleteStudentByTcNumber,
    updateStudentByTcNumber
 } = require('../controllers/studentController'); 

const router = express.Router();

router.route('/addStudent').post(addStudent); 
router.route('/getAllStudent').get(getAllStudents);
router.route('/deleteStudent/:tc_number').delete(deleteStudentByTcNumber);
router.route('/updateStudent/:tc_number').put(updateStudentByTcNumber);

module.exports = router; 

