// Importa las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const getLogin = require('../models/login'); // Importa el módulo getLogin si es necesario

// Configura la aplicación de Express
const app = express();
app.use(bodyParser.json());

// Define la función user_create
const user_create = async (req, res) => {
  const name = req.body.name;
  const pass = req.body.pass;
  const email = req.body.email;

  // Implementa el código necesario para crear un usuario utilizando getLogin.create

  getLogin.create(
    {
      name,
      email,
      pass,
    },
    { fields: ['name', 'email', 'pass'] }
  )
    .then((login) => {
      res.status(200).send(login); // Ajusta el código de estado y la respuesta según tu implementación
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error creating user'); // Ajusta el código de estado y el mensaje de error
    });
};

// Define la ruta para el endpoint
app.post('/api/login', user_create);

// Exporta la aplicación de Express
module.exports = app;
