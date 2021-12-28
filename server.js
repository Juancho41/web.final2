const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const comentariosRouter = require('./Routes/comentarios');

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors()); 

app.use('/comen1', comentariosRouter);

app.use(express.static(path.join(__dirname, 'build')));
app.get("/*", (req, res) => 
    {res.sendFile(path.join(__dirname, "build", "index.html"));
});


port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => {
        console.log(`Servidor funcionando en el puerto ${port}`)
    }))
    .catch((error) => {
        console.log(error.mesage)
        
    });



