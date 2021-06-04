const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;

const { validationResult } = require('express-validator');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    //Muestra todos los productos en LH:3000/products
    index: async (req, res) => {
        //llamamos a la DB y mostramos todos los prods.
        let userLogged = await req.session.userLogged

        db.Products.findAll()
        .then(response => {
            res.render('products/products', {products:response, toThousand, userLogged})
        });
    },

    playStation: (req, res) => {
        db.Products.findAll()
        .then(response => {
            res.render('products/playStation', {playStation:response, toThousand})
        })
    },

    xbox: (req, res) => {
        db.Products.findAll()
        .then(response => {
            res.render('products/xbox', {xbox:response, toThousand})
        })
    },

    cart: (req, res) => {
        db.Products.findAll()
        .then(response => {
         res.render('products/productCart', {productCart:response, toThousand});
        })
    },

    detail: async (req, res) => {
        //entramos al producto mediante req.params.id

        let userLogged = await req.session.userLogged

        db.Products.findByPk(req.params.id)
        .then(response => {
            res.render('products/productDetail', {productDetail:response, toThousand, userLogged})
        })
    },

    //VISTA DE CREAR PRODUCTO
    create: async function (req, res) {

        let productType = await db.ProductType.findAll();
        let category = await db.Category.findAll();
        let console = await db.Console.findAll();

        res.render('products/productCreate',{productType:productType, category:category, console:console});
    },

    store: async function (req,res) {
        const resultProductsValidation = validationResult(req);
        
        if(!resultProductsValidation.errors.length){

            db.Products.create({
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                price: req.body.price,
                discount: req.body.discount,
                product_type_id: req.body.product_type_id,
                category_id: req.body.category_id,
                console_id: req.body.console_id,
            })
                res.redirect('/products');
        } else {
            let productType = await db.ProductType.findAll();
            let category = await db.Category.findAll();
            let console = await db.Console.findAll();
            
            return res.render('products/productCreate', {
                errors: resultProductsValidation.mapped(),
                oldData: req.body,
                productType:productType,
                category:category,
                console:console
            });
        }
    },

    //VISTA DE EDITAR PRODUCTO
    edit: async function (req, res) {

        let productType = await db.ProductType.findAll();
        let category = await db.Category.findAll();
        let console = await db.Console.findAll();

        let product = await db.Products.findByPk(req.params.id)

        res.render('products/productEdit', {old:product, productType:productType, category:category, console:console});
    },

    //EDITAR PRODUCTO POR POST!
    update: async function(req,res) {
        // res.send(req.body)
        const resultProductsValidation = validationResult(req);

        

        if(!resultProductsValidation.errors.length){

            await db.Products.update({
                    name: req.body.name,
                    description: req.body.description,
                    image: req.file.filename,
                    price: req.body.price,
                    discount: req.body.discount,
                    product_type_id: req.body.product_type_id,
                    category_id: req.body.category_id,
                    console_id: req.body.console_id,
            },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            res.redirect('/products')
        }else{
            let productType = await db.ProductType.findAll();
            let category = await db.Category.findAll();
            let console = await db.Console.findAll();
            let product = await db.Products.findByPk(req.params.id);

            return res.render('products/productEdit', {
                errors: resultProductsValidation.mapped(),
                old:product,
                oldData: req.body,
                productType:productType,
                category:category,
                console:console,
            });
        }

    },
    
    delete: async function (req,res){
        let product = await db.Products.findByPk(req.params.id)

        await product.destroy()

        res.redirect('/products')
    }

   

}

module.exports = productsController;


//METODOS CON JSON

//METODO INDEX PARA USO CON JSON!
    // index: (req, res) => {
    //     let productos = path.join(__dirname, '../data/products.json');
    //     let producto = fs.readFileSync(productos, 'utf-8');
    //     let productosJSON = JSON.parse(producto);
    //     res.render('products/products', {productosJSON, toThousand});
    // },


// detail: (req, res) => {
    //     let productos = path.join(__dirname, '../data/products.json');
    //     let producto = fs.readFileSync(productos, 'utf-8');
    //     let productosJSON = JSON.parse(producto);

    //     let productDetail = productosJSON.find(productDetail=>productDetail.id==req.params.id);
    //     res.render('products/productDetail', {productDetail, toThousand})
    // },



      //METODO CREATE CON JSON
    // create: (req, res) => {
	// 	res.render('products/productCreate');
	// },



    //FUNCIONALIDAD PARA CREAR PRODUCTO
    // store: (req,res) => {
    //     let productos = path.join(__dirname, '../data/products.json');
    //     //NOS TRAEMOS EL JSON
    //     let producto = fs.readFileSync(productos, 'utf-8');
    //     //MANIPULO EL JSON Y LO CONVIERTO EN OBJ. LIT.
    //     let productosJSON = JSON.parse(producto);
    //     let ids = productosJSON.map(p=>p.id); //guardar en un array todos los ids
    //     let id= Math.max(...ids)+1; //filtra el mayor de los ids del array, se le suma 1 para el id del nuevo producto
    //     //Valores Nuevos de mi Obj Literal.
    //     productosJSON.push({
    //         id: parseInt(id),
    //         name: req.body.name,
    //         description: req.body.description,
    //         imagen: req.files[0].filename,
    //         price: parseFloat(req.body.price),
    //         discount: parseInt(req.body.discount),
    //         category: req.body.category,
    //         console: req.body.console,
    //         productType: req.body.productType
    //     })  
        
        
    //     fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productosJSON, null, ' '));
    //     res.redirect('/products')  
    // },


    // edit: (req,res) => {
    //     let productos = path.join(__dirname, '../data/products.json');
    //     let producto = fs.readFileSync(productos, 'utf-8');
    //     let productosJSON = JSON.parse(producto);
    //     let productoAEditar = productosJSON.find(p=>p.id == req.params.id)
        
    //     res.render('products/productEdit', {old:productoAEditar});
    // }, 

    // update: (req,res) => {
    //     let productos = path.join(__dirname, '../data/products.json');
    //     let producto = fs.readFileSync(productos, 'utf-8');
    //     let productosJSON = JSON.parse(producto);
    //     let id = req.params.id
    //     let productoAEditar = productosJSON.find(p=>p.id == id)
    //     let imagen
    //     if(req.file !=undefined){
    //         imagen = req.file.filename
    //     } else {
    //         imagen = productoAEditar.imagen
    //     }
    //     productoAEditar = {
    //         id: productoAEditar.id,
    //         ...req.body,
    //         imagen: imagen
    //     }
    //     let nuevoProducto = productosJSON.map(p => {
    //         if(p.id == productoAEditar.id){
    //             return p = {...productoAEditar}  
    //         }
    //         return p
    //     })
    //     fs.writeFileSync(productos, JSON.stringify(nuevoProducto, null, ' '));
    //     res.redirect('/products');
    // }, 

     // delete: (req,res) => {
    //     let productos = path.join(__dirname, '../data/products.json');
    //     let producto = fs.readFileSync(productos, 'utf-8');
    //     let productosJSON = JSON.parse(producto);

    //     let finalProducts = productosJSON.filter(finalProducts=>finalProducts.id!=req.params.id)
    //     fs.writeFileSync(productos, JSON.stringify(finalProducts, null, ' '));
    //     res.redirect('/products');
    // }