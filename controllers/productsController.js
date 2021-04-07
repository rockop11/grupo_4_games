const path = require('path');
const fs = require('fs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const productsController = {
    index: (req, res) => {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);
        res.render('products/products', {productosJSON, toThousand});
    },

    show: (req, res) => {
        res.render('products/productCart');
    },

    detail: (req, res) => {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);

        let productDetail = productosJSON.find(productDetail=>productDetail.id==req.params.id);
        res.render('products/productDetail', {productDetail, toThousand})
    },
    //VISTA DE CREAR PRODUCTO
    create: (req, res) => {
		res.render('products/productCreate');
	},

    //FUNCIONALIDAD PARA CREAR PRODUCTO
    store: (req,res) => {
        let productos = path.join(__dirname, '../data/products.json');
        //NOS TRAEMOS EL JSON
        let producto = fs.readFileSync(productos, 'utf-8');
        //MANIPULO EL JSON Y LO CONVIERTO EN OBJ. LIT.
        let productosJSON = JSON.parse(producto);
        let ids = productosJSON.map(p=>p.id); //guardar en un array todos los ids
        let id= Math.max(...ids)+1; //filtra el mayor de los ids del array, se le suma 1 para el id del nuevo producto
        //Valores Nuevos de mi Obj Literal.
        productosJSON.push({
            id: parseInt(id),
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            precio: parseFloat(req.body.precio),
            descuento: parseInt(req.body.descuento),
            categoria: req.body.categoria
        })  
        
        
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productosJSON, null, ' '));
        res.redirect('/products')  
    },

    //VISTA DE EDITAR PRODUCTO
    edit: (req,res) => {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);
        let productoAEditar = productosJSON.find(p=>p.id == req.params.id)
        
        res.render('products/productEdit', {old:productoAEditar});
    }, 

    //EDITAR PRODUCTO POR POST!
    update: (req,res) => {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);
        let id = req.params.id
        let productoAEditar = productosJSON.find(p=>p.id == id)
        let imagen
        if(req.file !=undefined){
            imagen = req.file.filename
        } else {
            imagen = productoAEditar.imagen
        }
        productoAEditar = {
            id: productoAEditar.id,
            ...req.body,
            imagen: imagen
        }
        let nuevoProducto = productosJSON.map(p => {
            if(p.id == productoAEditar.id){
                return p = {...productoAEditar}  
            }
            return p
        })
        fs.writeFileSync(productos, JSON.stringify(nuevoProducto, null, ' '));
        res.redirect('/products');
    }, 

    delete: (req,res) => {
        let productos = path.join(__dirname, '../data/products.json');
        let producto = fs.readFileSync(productos, 'utf-8');
        let productosJSON = JSON.parse(producto);

        let finalProducts = productosJSON.filter(finalProducts=>finalProducts.id!=req.params.id)
        fs.writeFileSync(productos, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/products');
    }

}

module.exports = productsController;