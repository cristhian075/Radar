//conexion a base de datos
import conf from './config';
import mongoose from 'mongoose';
mongoose.connect(conf.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB in On!!'))
    .catch(err => console.log(err));