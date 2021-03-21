const express = require('express');
const router = express.Router();

const upload = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');

const usersController = require('../controllers/usersController');

// vista del registro
router.get('/registro', usersController.registro);

// procesar el registro
router.post('/registro', upload.single('image'), validations, usersController.processRegister);

// vista del login
router.get('/login', usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile', usersController.profile);

module.exports = router;