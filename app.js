const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/producto', function(req, res) {
    res.sendFile(path.resolve('./views/productDetail.html'));
});

app.get('/carrito', function(req, res) {
    res.sendFile(path.resolve('./views/productCart.html'));
});

app.get('/registro', function(req, res) {
    res.sendFile(path.resolve('./views/register.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.resolve('./views/login.html'));
});

app.listen(3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});