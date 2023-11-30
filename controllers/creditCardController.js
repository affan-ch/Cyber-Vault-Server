const CreditCard = require('../models/CreditCard.js');


// Insert a new credit card
async function addCreditCard(req, res) {
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
        const newCreditCard = await CreditCard.create(reqBody);

        if (newCreditCard) {
            res.status(200).json(newCreditCard);
            console.log(newCreditCard);
        }
        else {
            res.status(500).json({ error: 'Credit Card insertion failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred during credit card insertion' });
    }
}

// Get All Credit Cards of a User
async function getCreditCards(req, res) {
    const user = req.user;

    if(!user){
        return res.status(400).json({ error: 'Access Denied!' });
    }

    try {
        const creditCards = await CreditCard.findAll({ where: { userId: user.id } });

        if (creditCards) {
            res.status(200).json(creditCards);
        }
        else {
            res.status(404).json({ error: 'No credit cards found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving credit cards' });
    }
}


// Update a credit card
async function updateCreditCard(req, res) {
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
        const updatedCreditCard = await CreditCard.update(reqBody, { where: { id: req.body.id, userId: user.id } });

        if (updatedCreditCard) {
            res.status(200).json(updatedCreditCard);
        }
        else {
            res.status(500).json({ error: 'Credit Card updation failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the credit card' });
    }
}


// Delete a credit card
async function deleteCreditCard(req, res) {
    const user = req.user;

    if(!user){
        return res.status(400).json({ error: 'Access Denied!' });
    }

    try {
        const deletedCreditCard = await CreditCard.destroy({ where: { id: req.body.id, userId: user.id } });

        if (deletedCreditCard) {
            res.status(200).json(deleteCreditCard);
        }
        else {
            res.status(404).json({ error: 'Error while deleting credit card.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while Deleting the credit card' });
    }
}




module.exports = { addCreditCard, getCreditCards, updateCreditCard, deleteCreditCard }

