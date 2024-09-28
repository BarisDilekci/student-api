const Student = require('../models/Student.js'); // Modeli require ile içe aktar

const addStudent = async (req, res) => {
    const { name, lastname, tc_number, date_of_birth } = req.body;

    if (!name || !lastname || !tc_number || !date_of_birth) {
        return res.status(400).json({ message: 'Tüm alanlar gereklidir.' });
    }

    const existingStudent = await Student.findOne({ tc_number });
    if (existingStudent) {
        return res.status(400).json({ message: 'Bu TC kimlik numarası zaten kayıtlı.' });
    }

    try {
        const student = new Student({
            name,
            lastname,
            tc_number,
            date_of_birth,
        });
        await student.save();
        res.status(201).json(student); 
    } catch (error) {
        console.error('Öğrenci ekleme hatası:', error);
        res.status(500).json({ message: 'Sunucu hatası, lütfen daha sonra tekrar deneyin.' });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        if (students.length === 0) {
            return res.status(404).json({ message: 'Hiç öğrenci bulunamadı.' });
        }
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Veri alınırken bir hata oluştu.', error: error.message });
    }
};

module.exports = { addStudent, getAllStudents }; 
