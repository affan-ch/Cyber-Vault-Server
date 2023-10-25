import express from 'express';

const router = express.Router();

import {createUser, getUserById, getSaltByEmail, login} from '../controllers/userController.js';


router.post('/signup', createUser);

router.post('/getSaltByEmail', getSaltByEmail);

router.post('/login', login);

router.get('/getUserById/:id', getUserById);



export default router;

