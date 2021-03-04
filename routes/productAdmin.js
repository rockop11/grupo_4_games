const express = require('express');

const router = express.Router();

const productAdminController = require ('../controllers/productAdminController');

router.get('/', productAdminController.show);

module.exports = router;

      