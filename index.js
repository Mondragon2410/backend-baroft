 const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();
const cookieParser = require('cookie-parser');


//Crear el servidor / aplicacion de express
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Auth-Token, X-Requested-With, content-type, Accept'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

//Lectura y parseo del body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Directorio publico / cualquier persona que conozca el puerto puede acceder
app.use(express.static('public'));

//Conexion Base de datos
dbConnection();

//CORS
app.use(cookieParser());
app.use(cors());

//Rutas back
app.use('/api/barbers', require('./routes/barbers'));
app.use('/api/services', require('./routes/services'));
app.use('/api/invoices', require('./routes/invoices'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/users', require('./routes/users')); 
app.use('/api/calendars', require('./routes/calendars'));

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.set('port', process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
}); 