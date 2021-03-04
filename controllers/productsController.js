const path = require('path');

const productsController = {
    index: (req, res) => {
        //if ()
        res.render('products/products');
    },

    show: (req, res) => {
        res.render('products/productCart');
    },

    detail: (req, res) => {
        res.render('products/productDetail');
    },

    create: (req, res) => {
		res.render('products/productCreate');
	},

    store: (req,res) => {
        res.send('producto creado');

    },

    edit: (req,res) => {
        res.send('productEdit');
    }, 

    update: (req,res) => {
        res.send('edicion del producto');
    }, 

    delete: (req,res) => {
        res.send('aca borraste un producto');
    }

}

module.exports = productsController;