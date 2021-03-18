const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');

const { body } = require('express-validator');


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
const usersController = require('../controllers/usersController');


const validations = [
    body('nombre').notEmpty().withMessage('Tienes que completar este campo'),
    body('usuario').notEmpty().withMessage('Tienes que completar este campo'),
    body('email').notEmpty().withMessage('Tienes que completar este campo'),
    body('contraseña').notEmpty().withMessage('Tienes que completar este campo'),
    body('repetir-contraseña').notEmpty().withMessage('Tienes que completar este campo'),
]

// vista del registro
router.get('/registro', usersController.registro);

// procesar el registro
router.post('/registro', upload.single('imagen'), validations, usersController.processRegister);

router.get('/login', usersController.login);

module.exports = router;