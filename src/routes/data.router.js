import { Router } from 'express';
import DataControllers from '../controllers/data.controller';

const router = Router();

//obtener todos
router.get('/data',  DataControllers.getData);
router.post('/data',  DataControllers.addData);



export default router;