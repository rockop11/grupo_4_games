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

// ** DON'T TOUCH FROM HERE **
// ** catch 404 and forward to error handler **
app.use((req, res, next) => next(createError(404)));

// ** error handler **
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{titulo:"error 404"});
});

// ** exports app - dont'touch **
module.exports = app;