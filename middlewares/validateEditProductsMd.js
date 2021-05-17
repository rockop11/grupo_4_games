const { body, check } = require('express-validator');

const editProductsValidation = [

check('name')
.isEmpty().withMessage('El campo "Nombre" está vacío').bail()
.isLength({min: 5}).withMessage('El campo debe tener al menos 5 caracteres'),
check('description')
.isEmpty().withMessage('El campo "Descripción" está vacío').bail()
.isLength({min: 15}).withMessage('El campo debe tener al menos 15 caracteres'),
check('price')
.isEmpty().withMessage('El campo "Precio" está vacío').bail()
.isNumeric().withMessage('Debe ingresar un precio númerico'),


]

module.exports = editProductsValidation;