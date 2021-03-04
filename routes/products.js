const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');




router.get('/:consola?', productsController.index)
//ESTO ES LO QUE VA DESPUES DE /PRODUCTOS!!!!!
router.get('/carrito', productsController.show);
router.get('/detalle', productsController.detalles);
router.get('/productCreate', productsController.create);

module.exports = router;