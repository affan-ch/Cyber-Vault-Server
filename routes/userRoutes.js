const express = require('express');
const router = express.Router();
const {createUser, getSaltByEmail, login, decodeToken} = require('../controllers/userController.js');
const validateToken = require('../middlewares/validateToken.js');


router.post('/signup', createUser);

router.post('/getSaltByEmail', getSaltByEmail);

router.post('/login', login);

router.post('/validateToken', validateToken, decodeToken);

module.exports = router;

