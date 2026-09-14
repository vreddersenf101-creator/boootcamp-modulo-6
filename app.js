const express = require('express');
const path = require('node:path');

const rutasPublicas = require('./publicRoutes');
const registrarVisita = require('./logs/middlewares/registrarVisita');

const app = express();

app.disable('x-powered-by');

// Recurso estático público.
app.use(
  '/static',
  express.static(path.join(__dirname, 'logs', 'public'))
);

// Middleware de registro de visitas.
app.use(registrarVisita);

// Router público.
app.use('/', rutasPublicas);

// Ruta no encontrada.
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Ruta no encontrada',
    data: null
  });
});

// Error handler.
app.use((error, req, res, next) => {
  console.error(error.message);

  res.status(500).json({
    status: 'error',
    message: 'No se pudo completar la solicitud',
    data: null
  });
});

module.exports = app;
