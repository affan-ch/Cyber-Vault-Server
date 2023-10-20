import express from 'express';

const router = express.Router();

import {addCreditCard} from '../controllers/creditCardController.js';


router.post('/addCreditCard', addCreditCard);


export default router;

