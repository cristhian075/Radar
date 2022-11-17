//importaciones de las librerias
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors'
import path from 'path';

//creando el servidor
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());



//rutas
app.get('/', (req, res) => {
    res.json({
        "Login Api node": {
            "inf":"demo Api loginDemo, con node, mongoose y jwt"
        },

    })
});


//importaciones de las rutas

import DataRouter from './routes/data.router';


app.use('/api',DataRouter);

//exportando el app
module.exports = app;