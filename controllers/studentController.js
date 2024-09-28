const Student = require('../models/Student.js'); // Modeli require ile içe aktar

const addStudent = async (req, res) => {
    const { name, lastname, tc_number, date_of_birth } = req.body;

    // Alan kontrolleri
    if (!name || !lastname || !tc_number || !date_of_birth) {
        return res.status(400).json({ message: 'Tüm alanlar gereklidir.' });
    }

    // TC kimlik numarasının benzersiz olmasını kontrol et
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
        res.status(201).json(student); // Başarılı yanıt
    } catch (error) {
        console.error('Öğrenci ekleme hatası:', error);
        res.status(500).json({ message: 'Sunucu hatası, lütfen daha sonra tekrar deneyin.' });
    }
};

module.exports = { addStudent }; // Fonksiyonu dışa aktar
