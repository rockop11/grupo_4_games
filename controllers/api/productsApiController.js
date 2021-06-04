const db = require('../../database/models');
const sequelize = db.sequelize;

const productsApiController = {
    list:(req,res)=>{
        db.Products.findAll()
        .then(products=>{
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "/api/products"
                },
                data: products
            }
                res.json(respuesta)
        })
    },

    detail:(req,res)=>{
        db.Products.findByPk(req.params.id)
        .then(product=>{
            let respuesta = {
                meta:{
                    status: 200,
                    total: product.id.length,
                    url: "/api/products/" + product.id
                },
                data: product
            }
            res.json(respuesta)
        })
    }

}

module.exports = productsApiController;