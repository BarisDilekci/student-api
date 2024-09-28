const express = require('express'); 
const { addStudent , getAllStudents} = require('../controllers/studentController'); 

const router = express.Router();

router.route('/addStudent').post(addStudent); 
router.route('/getAllStudent').get(getAllStudents);

module.exports = router; 

