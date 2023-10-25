import User from '../models/User.js';

// Create a new user
async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);

        if (newUser) {
            res.status(201).json({ message: 'User created successfully'});
        }
        else {
            res.status(500).json({ error: 'User creation failed' });
        }
    }
    catch (error) {
        var errorText = error.errors[0].message;
        console.log(errorText);

        if (errorText === 'email must be unique'){
            return res.status(500).json({ error: 'Email already exists' });
        }

        if (errorText === 'username must be unique'){
            return res.status(500).json({ error: 'Username already exists' });
        }

        if (errorText === 'phone must be unique'){
            return res.status(500).json({ error: 'Phone number already exists' });
        }


        res.status(500).json({ error: 'An error occurred during user creation' });
    }
}

// Get Salt by Email (for login)
async function getSaltByEmail(req, res) {
    try {
        const userEmail = req.body.email;
        const user = await User.findOne({ where: { email: userEmail } });

        if (user) {
            res.status(200).json(user.salt);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving user' });
    }
}

// login
async function login(req, res){
    try {
        const {email, password} = req.body;
        console.log(email);
        console.log(password);

        const user = await User.findOne({ where: { email: email, password: password } });

        if (user) {
            res.status(200).json({message: 'Login successful'});
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving user' });
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



export { createUser, getSaltByEmail, login, getUserById};
