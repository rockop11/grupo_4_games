const path = require('path');
const fs = require('fs');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: (req,res) => {
        // res.send(req.session);
        // res.send(req.session);
        //Llamamos a la base de datos mostrando todos los productos con el findAll
        db.Products.findAll().then(response => {
            //devolvemos la vista con una promesa con todos los productos
            res.render('index', {products:response, toThousand})
        })
    },

    search: (req, res) => {
        db.Products.findAll({
            where: {
                name: {[Op.like]: "%" + req.query.search + "%"}
            }
        }).then(response => {
            let search = req.query.search
            res.render('products/result',{
                search,
                products:response,
                toThousand
            })
        })
    }

}

module.exports = mainController;