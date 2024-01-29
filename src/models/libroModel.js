const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_DB, {});

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;