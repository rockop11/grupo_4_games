const path = require('path');
const { body, check } = require('express-validator');

const productsValidations = [
    check('name')
    .notEmpty().withMessage('Debe ingresar un nombre para el producto').bail()
    .isLength({min:3}).withMessage('El nombre es demsiado corto'),
    check('description')
    .notEmpty().withMessage('Debe ingresar una descripción').bail()
    .isLength({min: 15}).withMessage('La descripción es demasiado corta'),
    check('price')
    .notEmpty().withMessage('Debe ingresar un monto').bail()
    .isNumeric().withMessage('Debe ingresar un numero'),
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

module.exports = productsValidations