import express from 'express';

const router = express.Router();

import {createUser, getUserById} from '../controllers/userController.js';


router.post('/signup', createUser);

router.get('/getUserById/:id', getUserById);

export default router;

