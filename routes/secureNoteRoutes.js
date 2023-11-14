import express from 'express';

const router = express.Router();

import {addSecureNote, deleteSecureNote, updateSecureNote, getSecureNotes} from '../controllers/secureNoteController.js';
import validateToken from '../middlewares/validateToken.js';


router.post('/addSecureNote', validateToken, addSecureNote);

router.post('/getSecureNotes', validateToken, getSecureNotes);

router.post('/updateSecureNote', validateToken, updateSecureNote);

router.post('/deleteSecureNote', validateToken, deleteSecureNote);


export default router;

