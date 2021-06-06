const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const cors = require("cors");

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


//Requerimos rutas de Api
const productsApiRouter = require('./routes/api/productsApiRoutes');
const usersApiRouter = require('./routes/api/usersApiRoutes');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));


app.use(cookies());

app.use(userLoggedMiddleware);

//Cors para integrar Api al Dasboard de React
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

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


//Endpoints de Apis
app.use('/api/products', productsApiRouter);
app.use('/api/users', usersApiRouter);


let port = process.env.PORT || 3000;
//Servidor
app.listen(port, function(){
    console.log(`El servidor está corriendo en el puerto ${port}`)
});

