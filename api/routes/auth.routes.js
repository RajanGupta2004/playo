import express from 'express';
import {RegisterUser} from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/register', RegisterUser);

export default router;
