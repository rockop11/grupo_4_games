const express = require('express');

const router = express.Router();

const productosController = require('../controllers/productosController');




router.get('/:consola?', productosController.index)
//ESTO ES LO QUE VA DESPUES DE /PRODUCTOS!!!!!
router.get('/carrito', productosController.show);
router.get('/detalle', productosController.detalles);
router.get('/productCreate', productosController.create);

module.exports = router;