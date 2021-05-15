const path = require('path');
const { body, check } = require('express-validator');


const validations = [
    check('fullName')
	.notEmpty().withMessage('Tienes que escribir un nombre').bail()
	.isLength({min:3}).withMessage('El nombre es demsiado corto'),
    check('email')
    .notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    check('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	check('address').notEmpty().withMessage('Tienes que escribir un nombre'),
	check('location').notEmpty().withMessage('Tienes que escribir un nombre'),
	check('postalCode').notEmpty().withMessage('Tienes que escribir un nombre'),
	check('phone').notEmpty().withMessage('Tienes que escribir un nombre'),
    // check('repeatPassword').notEmpty().withMessage('Tienes que repetir la contraseña'),
    check('image').custom((value, { req })=>{
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