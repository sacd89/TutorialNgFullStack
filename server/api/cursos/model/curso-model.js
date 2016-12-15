import mongoose from 'mongoose';

const _cursoSchema = {
  titulo: {type: String},
  descripcion: {type: String},
  duracion: {type: String },
  createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_cursoSchema);
