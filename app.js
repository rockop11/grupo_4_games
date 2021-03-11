const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Rutas a vistas
const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

//Rutas index
app.use('/', mainRoutes);

//Rutas productos
//ESTO ES LO QUE TIENE QUE IR EN EL NAVEGADOR!!!
app.use('/products', productsRoutes);

//Rutas usuarios
app.use('/users', usersRoutes);

//Servidor
app.listen(3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});

