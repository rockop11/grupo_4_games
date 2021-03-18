const { validationResult} = require('express-validator');

const usersController = {
    registro: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req,res)=> {
       const resultValidation = validationResult(req);
             res.send(resultValidation)

    },

    login: (req, res)=> {
        res.render('users/login');
    }
}

module.exports = usersController;