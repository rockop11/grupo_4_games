const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
// const User = require('../models/User')
// const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;


const usersController = {
    register: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req,res)=> {
       const resultValidation = validationResult(req);

       if (!resultValidation.length){

        db.Users.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 12),
                repeatPassword: bcryptjs.hashSync(req.body.repeatPassword, 12),
                image: req.file.filename,
                address: req.body.address,
                location: req.body.location,
                postalCode: req.body.postalCode,
                phone: req.body.phone,
            }).then(function(user){
                res.redirect("/")
            })
        }
            else {
                return res.render('users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                 });
            }
       },



    //    let emailInDB = User.findByField('email', req.body.email);

    //    if(emailInDB){
    //     return res.render('users/register', {
    //         errors: {
    //             email: {
    //                 msg: 'Este email ya se encuentra registrado'
    //             }
    //         },

    //         oldData: req.body
    //      });
    //    }
     

    //    let userToCreate = {
    //        ...req.body,
    //        password: bcryptjs.hashSync(req.body.password, 10),
    //        repeatPassword: bcryptjs.hashSync(req.body.repeatPassword, 10),
    //        image: req.file.filename
    //    }

    //   let userCreated = db.Users.create(userToCreate);

    //   return res.redirect('/');


    login: (req, res) => {
        return res.render('users/login');
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60 })
                }

                return res.redirect('profile');
            }else{//si no coincide la contraseña se renderiza la vista de login con error
                res.render("./users/login",{titulo:"Ingresá" ,old:req.body, errors:{
                    email:{
                        msg:"Las credenciales son invalidas"
                    }
                }
            })}
    
            }else{//si no se encuentra el mail, volvemos a renderizar la vista de login con mensaje de error
                res.render("./users/login",{titulo:"Ingresá" , errors:{
                    email:{
                        msg:"El usuario no se encuentra en la base de datos"
                    }
                }
            })
            }
    
        },

    profile: (req, res) => {
        return res.render('users/profile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;