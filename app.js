const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.get ('/', function(req, res) {
    res.sendFile(path.resolve('./views/index.html'));
});

app.get ('/Producto', function(req, res) {
    res.sendFile(path.resolve('./views/productDetail.html'));
});

app.get ('/Carrito', function(req, res) {
    res.sendFile(path.resolve('./views/productCart.html'));
});

app.get ('/Registro', function(req, res) {
    res.sendFile(path.resolve('./views/register.html'));
});

app.get ('/Login', function(req, res) {
    res.sendFile(path.resolve('./views/login.html'));
});

app.listen(3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});