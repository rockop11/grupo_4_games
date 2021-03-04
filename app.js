const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Rutas a vistas
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const productAdminRoutes = require('./routes/productAdmin');

//Rutas index
app.use('/', mainRoutes);

//Rutas productos
//ESTO ES LO QUE TIENE QUE IR EN EL NAVEGADOR!!!
app.use('/productos', productsRoutes);

//Rutas usuarios
app.use('/users', usersRoutes);

//Rutas admin
//CREAR RUTA Y COSAS DE ADMIN
//app.use('/productoAdmin', productoAdminRoutes);


//Servidor
app.listen(3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});