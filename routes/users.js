const express = require('express');
const router = express.Router();

const upload = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');

const usersController = require('../controllers/usersController');

// vista del registro
router.get('/registro', usersController.registro);

// procesar el registro
router.post('/registro', upload.single('image'), validations, usersController.processRegister);

router.get('/login', usersController.login);

module.exports = router;