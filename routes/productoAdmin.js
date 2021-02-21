const express = require('express');

const router = express.Router();

const productoAdminController = require ('../controllers/productoAdminController');

router.get('/', productoAdminController.show);

module.exports = router;

