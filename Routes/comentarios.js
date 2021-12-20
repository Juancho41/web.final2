const Comentario = require('../models/Comentarios');
express = require('express');

router = express.Router();

router.get('/', async (req, res) => {
    const comentarios = await Comentario.find();

    res.json(comentarios);
});


router.post('/', async (req, res) => {
    const comentario = new Comentario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        comentario: req.body.comentario,
        fecha: req.body.fecha 
    });

    await comentario.save();

    res.json(comentario);
    
});


router.delete('/delete/:id', async (req, res) => {
    const result = await Comentario.findByIdAndDelete(req.params.id);

    res.json(result);

});


/* router.put('/complete/:id', async (req, res) => {
    const comentario = await Comentario.findById(req.params.id);

    comentario.complete = !comentario.complete;

    comentario.save();

    res.json(comentario);
    
}); */

module.exports = router;