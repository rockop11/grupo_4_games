const express = require('express');

const router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/carrito', productosController.show);

router.get('/detalle', productosController.detalles);

module.exports = router;