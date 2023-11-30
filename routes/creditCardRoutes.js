const express = require('express');

const router = express.Router();

const {addCreditCard, getCreditCards, updateCreditCard, deleteCreditCard} = require('../controllers/creditCardController.js');
const validateToken = require('../middlewares/validateToken.js');


router.post('/addCreditCard', validateToken, addCreditCard);

router.post('/getCreditCards', validateToken, getCreditCards);

router.post('/updateCreditCard', validateToken, updateCreditCard);

router.post('/deleteCreditCard', validateToken, deleteCreditCard);



module.exports = router;

