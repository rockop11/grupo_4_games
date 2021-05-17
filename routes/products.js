const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');

const uploadProducts = require('../middlewares/multerProductsMd');
const validationProducts = require('../middlewares/validateProductsMd');
const editProductsValidation = require('../middlewares/validateEditProductsMd');


// INDEX
router.get('/', productsController.index)

//ESTO ES LO QUE VA DESPUES DE /PRODUCTOS!!!!!
router.get('/cart', productsController.show);

//Vistas menu Duos
router.get('/playStation', productsController.playStation);
router.get('/xbox', productsController.xbox);

// DETALLE DEL PRODUCTO
router.get('/detail/:id', productsController.detail);

// CREACION DEL PRODUCTO
router.get('/create', productsController.create);
router.post('/create', uploadProducts.any(), validationProducts, productsController.store);

// EDICION DEL PRODUCTO
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', uploadProducts.any(), editProductsValidation, productsController.update);

// ELIMINACION DEL PRODUCTO
router.delete('/delete/:id', productsController.delete),

module.exports = router;