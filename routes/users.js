const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

const upload = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');
const loginValidations = require ('../middlewares/validateLoginMd');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

// vista del login
router.get('/login', guestMiddleware, usersController.login);
// Procesar el login
router.post('/login',loginValidations, usersController.loginProcess);

// vista del registro
router.get('/registro', guestMiddleware, usersController.register);
// procesar el registro
router.post('/registro', upload.any(), validations, usersController.processRegister);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', authMiddleware, usersController.logout);

//formulario de edicion de usuario
router.get('/edit',authMiddleware, usersController.edit)
router.put('/edit', upload.any(), validations, usersController.update)


module.exports = router;