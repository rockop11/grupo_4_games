const { validationResult} = require('express-validator');

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

      
    },

    login: (req, res)=> {
        res.render('users/login');
    }
}

module.exports = usersController;