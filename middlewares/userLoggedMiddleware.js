// const User = require('../models/User');

// function userLoggedMiddleware(req, res, next) {
//     res.locals.isLogged = false;
    
//     let emailInCookie = req.cookies.userEmail;
//     let userFromCookie = User.findByField('email', emailInCookie);
    
//     if(userFromCookie){
//         req.session.userLogged = userFromCookie;
//     }
    
//     if (req.session && req.session.userLogged) {
//         res.locals.isLogged = true;
// 		res.locals.userLogged = req.session.userLogged;
//     }
    
//     next();
// }

// module.exports = userLoggedMiddleware;



//version 2 con nuestra database

const db = require('../database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;


async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = await db.Users.findOne({
         where:{
            email:{[Op.like]:emailInCookie}
        }})
        
    if(userFromCookie){
        req.session.userLogged = userFromCookie;    
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
    } 

    next();
}

module.exports = userLoggedMiddleware;