const express = require('express');
const router = express.Router();

const upload = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const usersController = require('../controllers/usersController');

// vista del registro
router.get('/registro', guestMiddleware, usersController.registro);

// procesar el registro
router.post('/registro', upload.single('image'), validations, usersController.processRegister);

// vista del login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);

module.exports = router;