const express = require('express');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');

// Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, '../public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  
    } 
  })

  var upload = multer({ storage: storage });

// INDEX
router.get('/:consola?', productsController.index)

//ESTO ES LO QUE VA DESPUES DE /PRODUCTOS!!!!!
router.get('/carrito', productsController.show);

// DETALLE DEL PRODUCTO
router.get('/detail', productsController.detail);

// CREACION DEL PRODUCTO
router.get('/productCreate', productsController.create);
router.post('/:id', upload.single('image'), productsController.store);

// EDICION DEL PRODUCTO
router.get('/edit/:id?', productsController.edit);
router.patch('/:id', upload.single('image'), productsController.update);

// ELIMINACION DEL PRODUCTO
router.delete('/:id', productsController.delete),

module.exports = router;