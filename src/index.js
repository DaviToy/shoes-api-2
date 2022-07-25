// 1 Importaciones de componentes necesarios
const express = require('express');
const colors = require('colors');
// CORS
const cors = require('cors')
// 2 Declaración de variables para levantar el servidor
const app = express();
const port = 3000;
// 3 Obtener los routes
const routerApi = require('./routes/main.controller');
// 4 Agregar middleware para uso de req.body
app.use(express.json());

// CORS
const whitelist = ['http://127.0.0.1:5500']
const corsOptions = {
    oigin: function (origin, callback) {
        if (whitelist.includes(origin) || !origin){
            callback(null,true)
        } else {
            callback(new Error('No permitido por tema de CORS'))
        }
    }
}
app.use(cors(corsOptions))
// ROOT ENDPOINT
app.get('/', (req, res) =>{
    res.send('Api shoes by davitoy')
}) 
// 5 Levantar el servidor
app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow);
});
// 6 Agregar el route a la app
routerApi(app);