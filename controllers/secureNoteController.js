import SecureNote from '../models/SecureNote.js';


// Insert a new Secure Note
async function addSecureNote(req, res) {
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
        const newSecureNote = await SecureNote.create(reqBody);

        if (newSecureNote) {
            res.status(200).json(newSecureNote);
            console.log(newSecureNote);
        }
        else {
            res.status(500).json({ error: 'Secure Note insertion failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred during Secure Note insertion' });
    }
}

// Get All Secure Notes of a User
async function getSecureNotes(req, res) {
    const user = req.user;

    if(!user){
        return res.status(400).json({ error: 'Access Denied!' });
    }

    try {
        const secureNotes = await SecureNote.findAll({ where: { userId: user.id } });

        if (secureNotes) {
            res.status(200).json(secureNotes);
        }
        else {
            res.status(404).json({ error: 'No secure notes found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving secure notes' });
    }
}


// Update a Secure Note
async function updateSecureNote(req, res) {
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
        const updatedSecureNote = await SecureNote.update(reqBody, { where: { id: req.body.id, userId: user.id } });

        if (updatedSecureNote) {
            res.status(200).json(updatedSecureNote);
        }
        else {
            res.status(500).json({ error: 'Secure Note updation failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the secure note' });
    }
}

// Delete a Secure Note
async function deleteSecureNote(req, res) {
    const user = req.user;

    if(!user){
        return res.status(400).json({ error: 'Access Denied!' });
    }

    try {
        const deletedSecureNote = await SecureNote.destroy({ where: { id: req.body.id, userId: user.id } });

        if (deletedSecureNote) {
            res.status(200).json(deleteSecureNote);
        }
        else {
            res.status(404).json({ error: 'Error while deleting secure note.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while Deleting the secure note' });
    }
}




export { addSecureNote, updateSecureNote, getSecureNotes, deleteSecureNote }

