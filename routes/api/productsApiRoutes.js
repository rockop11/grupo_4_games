const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');

//Rutas
//Lista de usuarios
router.get('/', productsApiController.list)

//Ulitmo Producto
router.get('/lastProduct', productsApiController.ultimo)

//Detalle del usuario
router.get('/:id', productsApiController.detail)


module.exports = router;