const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');

const adminMiddleware = require('../middlewares/adminMiddleware');
const uploadProducts = require('../middlewares/multerProductsMd');
const validationProducts = require('../middlewares/validateProductsMd');
const editProductsValidation = require('../middlewares/validateEditProductsMd');


// INDEX
router.get('/', productsController.index)

//ESTO ES LO QUE VA DESPUES DE /PRODUCTOS!!!!!

//Ruta de Carrito de Compras
router.get('/cart', productsController.cart);

//Vistas menu Duos
router.get('/playStation', productsController.playStation);
router.get('/xbox', productsController.xbox);

// DETALLE DEL PRODUCTO
router.get('/detail/:id', productsController.detail);

// CREACION DEL PRODUCTO
router.get('/create', adminMiddleware, productsController.create);
router.post('/create', uploadProducts.single('image'), validationProducts, productsController.store);

// EDICION DEL PRODUCTO
router.get('/edit/:id', adminMiddleware, productsController.edit);
router.put('/edit/:id', uploadProducts.single('image'), editProductsValidation, productsController.update);

// ELIMINACION DEL PRODUCTO
router.delete('/delete/:id', productsController.delete),

module.exports = router;