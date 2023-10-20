import User from '../models/User.js';

// Create a new user
async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);

        if (newUser) {
            res.status(201).json(newUser);
        }
        else {
            res.status(500).json({ error: 'User creation failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred during user creation' });
    }
}

// Get a user by id
async function getUserById(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving user' });
    }
}



export { createUser, getUserById};
