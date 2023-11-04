import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function validateToken(req, res, next) {
    const token = req.body.token;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    
    try{
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            if (err) {
                return res.status(403).json({ message: 'Failed to authenticate token' });
            }
    
            // If the token is valid, save the decoded information for later use
            req.user = decoded;
            next();
    
        });
    }
    catch(error){
        return res.status(401).json({ message: 'Error While Verifying Token' });
    }
    
}

export default validateToken;