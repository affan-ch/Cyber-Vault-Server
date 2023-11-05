import express from 'express';

const router = express.Router();

import { addAccount, getAccounts, updateAccount, deleteAccount } from '../controllers/accountController.js';
import validateToken from '../middlewares/validateToken.js';


router.post('/addAccount', validateToken, addAccount);

router.post('/getAccounts', validateToken, getAccounts);

router.post('/updateAccount', validateToken, updateAccount);

router.post('/deleteAccount', validateToken, deleteAccount);

export default router;
