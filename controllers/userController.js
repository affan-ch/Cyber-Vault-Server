import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Create a new user
async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);

        if (newUser) {
            res.status(201).json({ message: 'User created successfully' });
        }
        else {
            res.status(500).json({ error: 'User creation failed' });
        }
    }
    catch (error) {
        var errorText = error.errors[0].message;
        console.log(errorText);

        if (errorText === 'email must be unique') {
            return res.status(500).json({ error: 'Email already exists' });
        }

        if (errorText === 'username must be unique') {
            return res.status(500).json({ error: 'Username already exists' });
        }

        if (errorText === 'phone must be unique') {
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

// Generate JWT token
function GenerateToken(user) {

    const payload = {
        id: user.id,
        email: user.email,
        username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '4h' });

    return token;
};


// login
async function login(req, res) {
    try {
        const { email, password } = req.body;
        console.log(email);
        console.log(password);

        const user = await User.findOne({ where: { email: email, password: password } });

        if (user) {
            // create a token
            const token = GenerateToken(user);

            res.status(200).json({
                message: 'Login successful',
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                token: token
            });
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


async function decodeToken(req, res) {
    const user = req.user;

    res.status(200).json({
        message: 'Session is Valid !',
        id: user.id,
        email: user.email,
        username: user.username,
    });

}


export { createUser, getSaltByEmail, login, decodeToken };
