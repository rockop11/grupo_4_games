const path = require('path');
const { body, check } = require('express-validator');


const validations = [
    check('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
    check('email')
    .notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    check('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    check('repeatPassword').notEmpty().withMessage('Tienes que repetir la contraseña'),
    body('image').custom((value, { req })=>{
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

module.exports = validations