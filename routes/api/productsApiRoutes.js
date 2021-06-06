const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');

//Rutas
//Lista de usuarios
router.get('/', productsApiController.list)

//Detalle del usuario
router.get('/:id', productsApiController.detail)

//Ulitmo Producto
// router.get('/lastProduct', productsApiController.ultimo)


module.exports = router;