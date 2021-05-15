const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;


const usersController = {
    register: (req, res) => {
        res.render('users/register');
    },

    processRegister: async (req, res) => {
        const resultValidation = validationResult(req);

        let usuarioRepetido = await db.Users.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }
        })
        
        if (!resultValidation.errors.length && !usuarioRepetido) {
            
            db.Users.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 12),
                // repeatPassword: bcryptjs.hashSync(req.body.repeatPassword, 12),
                image: req.files[0].filename,
                address: req.body.address,
                location: req.body.location,
                postalCode: req.body.postalCode,
                phone: req.body.phone,
            }).then(function(user) {
                req.session.userLogged = user;
                res.redirect("/")
            })
        } else {
            if (usuarioRepetido) {
                return res.render('users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
            })} else {
                
                return res.render('users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
        }
    },


    login: (req, res) => {
        return res.render('users/login');
    },

    loginProcess: async (req, res) => {
        let userToLogin = await db.Users.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }
        })
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                // res.send(userToLogin)
                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: 5 * 60 * 1000 }); //probamos otra opcion 'email'
                }

                return res.redirect('profile');
            } else {//si no coincide la contraseña se renderiza la vista de login con error
                res.render("./users/login", {
                    titulo: "Ingresá", old: req.body, errors: {
                        email: {
                            msg: "Las credenciales son invalidas"
                        }
                    }
                })
            }

        } else { //si no se encuentra el mail, volvemos a renderizar la vista de login con mensaje de error
            res.render("./users/login", {
                titulo: "Ingresá", errors: {
                    email: {
                        msg: "El usuario no se encuentra en la base de datos"
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

    edit: (req, res) => {
        res.render('users/userEdit', {
            user: req.session.userLogged
        })
    },

    update: (req, res) => {
        db.Users.findByPk(req.session.userLogged.id)
            .then(function (user) {
                user.update({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 12),
                    repeatPassword: bcryptjs.hashSync(req.body.repeatPassword, 12),
                    image: req.files[0].filename,
                    address: req.body.address,
                    location: req.body.location,
                    postalCode: req.body.postalCode,
                    phone: req.body.phone,
                }).then(user => {
                    req.session.userLogged = user;
                    res.redirect("/users/profile")
                });
            }).catch(function (response) {
                // si no  encuentra el ususario  
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userEmail'); //probamos otra opcion 'email'
        return res.redirect('/');
    }
}

module.exports = usersController;