const express = require('express');
const router = express.Router();

const upload = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const usersController = require('../controllers/usersController');

// vista del registro
router.get('/registro', guestMiddleware, usersController.register);

// procesar el registro
router.post('/registro', upload.any(), validations, usersController.processRegister);

// vista del login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

//formulario de edicion de usuario
router.get('/edit',authMiddleware, usersController.edit)
router.put('/edit', upload.any(), validations, usersController.update)


// Logout
router.get('/logout', authMiddleware, usersController.logout);

module.exports = router;