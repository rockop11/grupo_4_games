const path = require('path');

const productoAdminController = {
    show: function(req, res) {
        res.render('productoAdmin');
    },
}

module.exports = productoAdminController;