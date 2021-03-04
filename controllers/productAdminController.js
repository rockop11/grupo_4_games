const path = require('path');

const productAdminController = {
    show: function(req, res) {
        res.render('productAdmin');
    },
}

module.exports = productAdminController;