import express from 'express';

const router = express.Router();

import {addCreditCard, getCreditCards, updateCreditCard, deleteCreditCard} from '../controllers/creditCardController.js';
import validateToken from '../middlewares/validateToken.js';


router.post('/addCreditCard', validateToken, addCreditCard);

router.post('/getCreditCards', validateToken, getCreditCards);

router.post('/updateCreditCard', validateToken, updateCreditCard);

router.post('/deleteCreditCard', validateToken, deleteCreditCard);



export default router;

