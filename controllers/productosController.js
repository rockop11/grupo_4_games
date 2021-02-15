const path = require('path');

const productosController = {
    show: function(req, res) {
        res.sendFile(path.resolve('./views/productCart.html'));
    },
    detalles: function(req, res) {
        res.sendFile(path.resolve('./views/productDetail.html'));
    },
}

module.exports = productosController;