import express from 'express';

const router = express.Router();

import {addPersonalInfo, getPersonalInfos, updatePersonalInfo, deletePersonalInfo} from '../controllers/personalInfoController.js';
import validateToken from '../middlewares/validateToken.js';

router.post('/addPersonalInfo', validateToken, addPersonalInfo);

router.post('/getPersonalInfos', validateToken, getPersonalInfos);

router.post('/updatePersonalInfo', validateToken, updatePersonalInfo);

router.post('/deletePersonalInfo', validateToken, deletePersonalInfo);

export default router;
