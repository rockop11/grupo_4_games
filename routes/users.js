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
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('usuario').notEmpty().withMessage('Tienes que escribir un usuario'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('repetirContraseña').notEmpty().withMessage('Tienes que repetir la contraseña'),
    body('imagen').custom((value, { req })=>{
		let file = req.file;
		let acceptedExtensions = ['.jpg','.png','.gif'];
		

		if (!file){
			throw new Error('Tienes que subir una imagen');
		}else{
			let fileExtension = path.extname(file.originalname);
			if(!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]

// vista del registro
router.get('/registro', usersController.registro);

// procesar el registro
router.post('/registro', upload.single('imagen'), validations, usersController.processRegister);

router.get('/login', usersController.login);

module.exports = router;