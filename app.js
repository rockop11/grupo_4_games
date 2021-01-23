const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.get ('/', function(req, res) {
    res.sendFile(path.resolve('./views/index.html'));
});

app.listen(3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});