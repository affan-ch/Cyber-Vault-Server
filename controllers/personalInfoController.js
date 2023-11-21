import PersonalInfo from '../models/PersonalInfo.js';


// Insert a new personal Info
async function addPersonalInfo(req, res) {
    const user = req.user;

    if(!user){
        return res.status(400).json({ error: 'Access Denied!' });
    }

    const { token, ...body } = req.body;

    body.userId = user.id;

    const reqBody = Object.entries(body).reduce((acc, [key, value]) => {
        if (value !== '') {
          acc[key] = value;
        }
        return acc;
    }, {});

    console.log(user);
    console.log(reqBody);


    try {
        const newPersonalInfo = await PersonalInfo.create(reqBody);

        if (newPersonalInfo) {
            res.status(200).json(newPersonalInfo);
            console.log(newPersonalInfo);
        }
        else {
            res.status(500).json({ error: 'Personal Info insertion failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred during personal info insertion' });
    }
}

// Get All Personal Info of a User
async function getPersonalInfos(req, res) {
    const user = req.user;

    if(!user){
        return res.status(400).json({ error: 'Access Denied!' });
    }

    try {
        const personalInfos = await PersonalInfo.findAll({ where: { userId: user.id } });

        if (personalInfos) {
            res.status(200).json(personalInfos);
        }
        else {
            res.status(404).json({ error: 'No personal info record found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving personal info' });
    }
}


// Update a Personal Info
async function updatePersonalInfo(req, res) {
    const user = req.user;

    if(!user){
        return res.status(400).json({ error: 'Access Denied!' });
    }

    const { id, token, ...body } = req.body;


    const reqBody = Object.entries(body).reduce((acc, [key, value]) => {
        if (value !== '') {
          acc[key] = value;
        }
        else{
            acc[key] = null;
        }
        return acc;
    }, {});


    try {
        const updatedPersonalInfo = await PersonalInfo.update(reqBody, { where: { id: req.body.id, userId: user.id } });

        if (updatedPersonalInfo) {
            res.status(200).json(updatedPersonalInfo);
        }
        else {
            res.status(500).json({ error: 'Personal Info updation failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the personal info' });
    }
}


// Delete a Personal Info
async function deletePersonalInfo(req, res) {
    const user = req.user;

    if(!user){
        return res.status(400).json({ error: 'Access Denied!' });
    }

    try {
        const deletedPersonalInfo = await PersonalInfo.destroy({ where: { id: req.body.id, userId: user.id } });

        if (deletedPersonalInfo) {
            res.status(200).json(deletedPersonalInfo);
        }
        else {
            res.status(404).json({ error: 'Error while deleting personal info.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the personal info' });
    }
}




export { addPersonalInfo, getPersonalInfos, updatePersonalInfo, deletePersonalInfo }

