import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const prestamoSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  apellido: {type: String, required: [true, 'Apellido obligatorio']},
  identificacion: Number,
  id_prestamo: Number,
  nombre_libro: {type: String, required: [true, 'Nombre obligatorio']},
  id_libro: Number,
  autor: String,
  editorial: String,
  categoria: String,
  activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Prestamo = mongoose.model('Prestamo', prestamoSchema);

export default Prestamo;