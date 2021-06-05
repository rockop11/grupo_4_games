const db = require('../../database/models');
const sequelize = db.sequelize;

const productsApiController = {
    list:(req,res)=>{
        db.Products.findAll({
        include:['categories', 'consoles', 'productTypes']
    })
        .then(products=>{
            let consola = products.filter(product => product.product_type_id == 1)
            let accesorio = products.filter(product => product.product_type_id == 2)
            let juego = products.filter(product => product.product_type_id == 3)
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "/api/products",
                    countByCategory: {
                        consola: consola.length,
                        accesorio: accesorio.length,
                        juego: juego.length,
                    }
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
    },

    detail:(req,res)=>{
        db.Products.findByPk(req.params.id, {
            include:['categories', 'consoles', 'productTypes']
        })
        .then(product=>{
            let respuesta = {
                meta:{
                    status: 200,
                    total: product.id.length,
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
    }

}

module.exports = productsApiController;