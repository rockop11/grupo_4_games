const db = require('../../database/models');
const sequelize = db.sequelize;

const productsApiController = {
    list:(req,res)=>{
        db.ProductType.findAll({
            include:['products']
        })
        .then(categories => {

        db.Products.findAll({
        include:['categories', 'consoles', 'productTypes']
    })
        .then(products=>{
            let arrayCategorias = []
            for(let i=0; i<categories.length ; i++){
                arrayCategorias.push({
                    nombre: categories[i].dataValues.name,
                    total: categories[i].dataValues.products.length
                })
            }

            let consola = products.filter(product => product.product_type_id == 1)
            let accesorio = products.filter(product => product.product_type_id == 2)
            let juego = products.filter(product => product.product_type_id == 3)
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "/api/products",
                    categories: categories.length,
                    categoryNames: arrayCategorias,
                    countByCategory: [
                        {consola: consola.length},
                        {accesorio: accesorio.length},
                        {juego: juego.length}
                    ]
                },
                data: products.map(product => {
                    return{
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        image: "/img/fotosMulter/" + product.image,
                        price: product.price,
                        discount: product.discount,
                        productType: {name:product.productTypes.name}, 
                        categories: {name:product.categories.name}, 
                        consoles: {name:product.consoles.name}
                    }
                })
            }
        
            res.json(respuesta)
        })    
        })
        .catch(function(error){
            res.json({status:800})
        })
    },

    detail:(req,res)=>{
        db.Products.findByPk(req.params.id, {
            include:['categories', 'consoles', 'productTypes']
        })
        .then(product=>{
            let respuesta = {
                meta:{
                    status: 200,
                    url: "/api/products/" + product.id
                },
                data: {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        image: "/img/fotosMulter/" + product.image,
                        price: product.price,
                        discount: product.discount,
                        productType: {name:product.productTypes.name}, 
                        categories: {name:product.categories.name}, 
                        consoles: {name:product.consoles.name}
                    }
                }
            
            res.json(respuesta)
        })
        .catch(function(error){
            res.json({status:800})
        })
    },

    ultimo: (req, res) => {
        db.Products.findAll({order:[["id", "DESC"]], limit:1})
        .then(function (product) {
            product[0].setDataValue("endpoint", "/api/products/lastProduct/" + product.length)

            let apiResponse= {
                meta: {
                    status: 200,
                    url:"/api/products/lastProduct",
                    total: product.length
                },
                data: product
            }
            res.json(apiResponse)
        })
        .catch(function(error){
            res.json({status:500})
        })
    }

}

module.exports = productsApiController;