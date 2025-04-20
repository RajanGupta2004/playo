import express from 'express';
import {getVenusData} from '../controllers/venu.controllers.js';

const router = express.Router();

router.get('/venues', getVenusData);

export default router;
