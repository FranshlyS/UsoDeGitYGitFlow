const app = require('./app');
const connectDB = require('./config/database');

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

app.listen(PORT, () => {
  console.log('Servidor ejecutándose en puerto');
});
