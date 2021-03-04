const path = require('path');

const productsController = {
    index: function (req, res) {
        //if ()
        res.render('products/products')
    },

    show: function(req, res) {
        res.render('products/productCart');
    },

    detalles: function(req, res) {
        res.render('products/productDetail');
    },

    create: (req, res) => {
		res.send('products/productCreate');
	},


}

module.exports = productsController;