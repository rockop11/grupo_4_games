const multer = require('multer');
const path = require('path');

// Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
        cb(null, path.join(__dirname, '../public/img/usersImg')); 
    }, 
    filename: function (req, file, cb) { 
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  
    } 
})

const upload = multer({ storage: storage });

module.exports = upload