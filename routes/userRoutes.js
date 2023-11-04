import express from 'express';
const router = express.Router();
import {createUser, getSaltByEmail, login, decodeToken} from '../controllers/userController.js';
import validateToken from '../middlewares/validateToken.js';


router.post('/signup', createUser);

router.post('/getSaltByEmail', getSaltByEmail);

router.post('/login', login);

router.post('/validateToken', validateToken, decodeToken);


export default router;

