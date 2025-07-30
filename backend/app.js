const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crud_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API CRUD funcionando correctamente' });
});

module.exports = app;