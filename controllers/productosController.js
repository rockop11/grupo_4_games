const path = require('path');

const productosController = {
    show: function(req, res) {
        res.render('products/productCart');
    },
    detalles: function(req, res) {
        res.render('products/productDetail');
    },
}

module.exports = productosController;