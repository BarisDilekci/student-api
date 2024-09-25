const express = require('express');
const router = express.Router();

let students = [
    {id: 1, name: "Ahmet"},
    {id: 2, name: "Seda"},
    {id: 3, name: "Veli"},
];

router.get('/', (req, res) => {
    res.send(students);
});

router.get('/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).send("No student found with the provided ID.");
    }
    res.send(student);
});

router.post('/', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name
    };
    students.push(student);
    res.send(students);
});

module.exports = router;
