const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController');

// Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, path.join(__dirname, '../public/img/fotosMulter')); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  
    } 
  })

  var upload = multer({ storage: storage });

// INDEX
router.get('/', productsController.index)

//ESTO ES LO QUE VA DESPUES DE /PRODUCTOS!!!!!
router.get('/cart', productsController.show);

// DETALLE DEL PRODUCTO
router.get('/detail/:id', productsController.detail);

// CREACION DEL PRODUCTO
router.get('/create', productsController.create);
router.post('/create', upload.any(), productsController.store);

// EDICION DEL PRODUCTO
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', upload.any(), productsController.update);

// ELIMINACION DEL PRODUCTO
router.delete('/delete/:id', productsController.delete),

module.exports = router;