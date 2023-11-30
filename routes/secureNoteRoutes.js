const express = require('express');

const router = express.Router();

const {addSecureNote, deleteSecureNote, updateSecureNote, getSecureNotes} = require('../controllers/secureNoteController.js');
const validateToken = require('../middlewares/validateToken.js');

router.post('/addSecureNote', validateToken, addSecureNote);

router.post('/getSecureNotes', validateToken, getSecureNotes);

router.post('/updateSecureNote', validateToken, updateSecureNote);

router.post('/deleteSecureNote', validateToken, deleteSecureNote);

module.exports = router;