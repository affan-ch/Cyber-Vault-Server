import CreditCard from '../models/CreditCard.js';

// Insert a new credit card
async function addCreditCard(req, res) {
    try {
        const newCreditCard = await CreditCard.create(req.body);

        if (newCreditCard) {
            res.status(201).json(newCreditCard);
        }
        else {
            res.status(500).json({ error: 'Credit Card insertion failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred during credit card insertion' });
    }
}

export { addCreditCard }

