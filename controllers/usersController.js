const path = require('path');

const usersController = {
    registro: function(req, res) {
        res.render('users/register');
    },
    login: function(req, res) {
        res.render('users/login');
    }
}

module.exports = usersController;