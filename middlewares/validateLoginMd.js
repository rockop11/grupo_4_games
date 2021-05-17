const { body, check } = require('express-validator');

const loginValidations = [
    check('email')
    .notEmpty().withMessage('Debe completar el campo "Email"').bail()
    .isEmail().withMessage('Debe agregar un formato email'),
    check('password')
    .notEmpty().withMessage('Debe completar el campo "Contraseña"').bail()
    .isLength().withMessage('La contrasela debe tener minimo 8 caracteres')
]

module.exports = loginValidations ;