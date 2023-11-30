const express = require('express');

const router = express.Router();

const {addPersonalInfo, getPersonalInfos, updatePersonalInfo, deletePersonalInfo} = require('../controllers/personalInfoController.js');
const validateToken = require('../middlewares/validateToken.js');

router.post('/addPersonalInfo', validateToken, addPersonalInfo);

router.post('/getPersonalInfos', validateToken, getPersonalInfos);

router.post('/updatePersonalInfo', validateToken, updatePersonalInfo);

router.post('/deletePersonalInfo', validateToken, deletePersonalInfo);

module.exports = router;
