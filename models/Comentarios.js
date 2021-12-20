const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
    apellido: {
		type: String,
		required: true
	},
    email: {
		type: String,
		required: true
	},
	fecha: {
		type: Date,
        
	},
    comentario: {
		type: String,
		required: true
	},
	timestamp: {
		type: String,
		default: Date.now()
	}
});

const Comentario = mongoose.model("Comentario", ComentarioSchema);

module.exports = Comentario;