const bcryptjs = require('bcryptjs')
const { validationResult} = require('express-validator');
const User = require('../models/User')


const usersController = {
    registro: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req,res)=> {
       const resultValidation = validationResult(req);


       if (resultValidation.errors.length > 0){
        return res.render('users/register', {
            errors: resultValidation.mapped(),
            oldData: req.body
         });
       }

       let emailInDB = User.findByField('email', req.body.email);
       
       let userInDB = User.findByField('user', req.body.user);

       if(emailInDB){
        return res.render('users/register', {
            errors: {
                email: {
                    msg: 'Este email ya se encuentra registrado'
                }
            },

            oldData: req.body
         });
       }

       if(userInDB){
        return res.render('users/register', {
            errors: {
                user: {
                    msg: 'Este usuario ya se encuentra registrado'
                }
            },

            oldData: req.body
         });
       }

     

       let userToCreate = {
           ...req.body,
           password: bcryptjs.hashSync(req.body.password, 10),
           repeatPassword: bcryptjs.hashSync(req.body.repeatPassword, 10),
           image: req.file.filename
       }

      let userCreated = User.create(userToCreate);

      return res.redirect('/')

    },

    login: (req, res)=> {
        res.render('users/login');
    }
}

module.exports = usersController;