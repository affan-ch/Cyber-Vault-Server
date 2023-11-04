import express from 'express';

const router = express.Router();

import {addCreditCard} from '../controllers/creditCardController.js';
import validateToken from '../middlewares/validateToken.js';


router.post('/addCreditCard', validateToken, addCreditCard);


export default router;

