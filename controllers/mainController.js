const path = require('path');

const mainController = {
    index: function(req, res) {
        res.sendFile(path.resolve('./views/index.html'));
    }
}

module.exports = mainController;