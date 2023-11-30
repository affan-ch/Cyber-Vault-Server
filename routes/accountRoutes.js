const express = require('express');

const router = express.Router();

const { addAccount, getAccounts, updateAccount, deleteAccount } = require('../controllers/accountController.js');
const validateToken = require('../middlewares/validateToken.js');


router.post('/addAccount', validateToken, addAccount);

router.post('/getAccounts', validateToken, getAccounts);

router.post('/updateAccount', validateToken, updateAccount);

router.post('/deleteAccount', validateToken, deleteAccount);

module.exports = router;
