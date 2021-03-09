const path = require('path');
const fs = require('fs');


const productsController = {
    index: (req, res) => {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);
        res.render('products/products', {productosJSON});
    },

    show: (req, res) => {
        res.render('products/productCart');
    },

    detail: (req, res) => {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);

        //ANDA X LA MITAD
        for (let i=0 ; i<productosJSON.length ; i ++){
            if(productosJSON[i].id == req.params.id){
                return res.render('products/productDetail', {productosJSON});
            } else {

            };  
        };
        //let product = productosJSON.find(function(product){
            //product.id == req.params.id
        //})
        //res.render('products/productDetail', {productosJSON});
    },

    create: (req, res) => {
		res.render('products/productCreate');
	},

    store: (req,res) => {
        let productos = path.join(__dirname, '../data/products.json');
        //NOS TRAEMOS EL JSON
        let producto = fs.readFileSync(productos, 'utf-8');
        //MANIPULO EL JSON Y LO CONVIERTO EN OBJ. LIT.
        let productosJSON = JSON.parse(producto);
        //Valores Nuevos de mi Obj Literal.
        productosJSON.push({
            id: req.body.id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            precio: req.body.precio,
            descuento: req.body.descuento,
            interes: req.body.interes
        })  
        
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productosJSON, null, ' '));
        res.redirect('/products')
        
        //res.redirect('/products')

        
    },

    edit: (req,res) => {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);
        res.render('products/productEdit', {productosJSON});
    }, 

    update: (req,res) => {
    //     res.send('edicion del producto');
    }, 

    delete: (req,res) => {
        // res.send('aca borraste un producto');
    }

}

module.exports = productsController;