const path = require('path');

const usersController = {
    registro: function(req, res) {
        res.sendFile(path.resolve('./views/register.html'));
    },
    login: function(req, res) {
        res.sendFile(path.resolve('./views/login.html'));
    }
}

module.exports = usersController;