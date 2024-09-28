const Student = require('../models/Student.js'); 

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

const deleteStudentByTcNumber = async (req, res) => {
    const { tc_number } = req.params; 

    try {
        const student = await Student.findOneAndDelete({ tc_number });


        if (!student) {
            return res.status(404).json({ message: 'Öğrenci bulunamadı.' });
        }

        res.status(200).json({ message: 'Öğrenci başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ message: 'Veri silinirken bir hata oluştu.', error: error.message });
    }
};

const updateStudentByTcNumber = async (req, res) => {
    const { tc_number } = req.params;
    const { name, lastname, date_of_birth } = req.body;

    try {
   
        const updatedStudent = await Student.findOneAndUpdate(
            { tc_number },
            { $set: { name, lastname, date_of_birth } }, 
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Öğrenci bulunamadı.' });
        }

        res.status(200).json({ message: 'Öğrenci başarıyla güncellendi.', student: updatedStudent });
    } catch (error) {
        console.error('Error updating student:', error.message); 
        res.status(500).json({ message: 'Veri güncellenirken bir hata oluştu.' });
    }
};


module.exports = { addStudent, getAllStudents, deleteStudentByTcNumber, updateStudentByTcNumber }; 
