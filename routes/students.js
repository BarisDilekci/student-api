const express = require('express'); 
const { addStudent , getAllStudents, deleteStudentByTcNumber } = require('../controllers/studentController'); 

const router = express.Router();

router.route('/addStudent').post(addStudent); 
router.route('/getAllStudent').get(getAllStudents);
router.route('/deleteStudent/:tc_number').delete(deleteStudentByTcNumber);

module.exports = router; 

