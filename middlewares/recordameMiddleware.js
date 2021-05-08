// const db = require('../database/models');
// const { Op } = require("sequelize");


// async function recordameMiddleware (req, res, next) {
//     if(req.cookies.userEmail != undefined && req.session.userLogged == undefined){
//         let userToLogin = await db.Users.findOne({
//             where: {
//                 email: {[Op.like]:req.cookies.userEmail}
//             }
//         })
//         req.session.userLogged = userToLogin;
//     }
//     next();
// }

// module.exports = recordameMiddleware;

// QUISE PROBAR OTRA COOKIE PERO NO HUBO CASO (ROCKO)