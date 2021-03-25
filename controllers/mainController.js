const path = require('path');
const fs = require('fs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {

    index: function(req, res) {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);
        let ofertas = productosJSON.filter(product => product.categoria=='ofertas');
		let novedades = productosJSON.filter(product => product.categoria=='novedades');
        res.render('index', {productosJSON, ofertas, novedades, toThousand});
    },
    search: (req,res)=>{
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);
        let search = req.query.keywords;
        let productsToSearch = productosJSON.filter(p=> p.nombre.toLowerCase().includes(search));
        res.render('products/result', {
            products: productsToSearch, 
            search,
            toThousand,
        })
    },
}

module.exports = mainController;