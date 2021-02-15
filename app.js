const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

// Rutas a vistas
const mainRoutes = require('./routes/main');
const productosRoutes = require('./routes/productos');
const usersRoutes = require('./routes/users');


app.use('/', mainRoutes);

app.use('/productos', productosRoutes);

app.use('/users', usersRoutes);

// app.get('/registro', function(req, res) {
//     res.sendFile(path.resolve('./views/register.html'));
// });

// app.get('/login', function(req, res) {
//     res.sendFile(path.resolve('./views/login.html'));
// });

app.listen(3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});