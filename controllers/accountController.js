import Account from '../models/Account.js';

// Insert a new Account
async function addAccount(req, res) {
    const user = req.user;

    if(!user) return res.status(403).json({ error: 'Access denied' });

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
        const newAccount = await Account.create(reqBody);

        if (newAccount) {
            res.status(201).json(newAccount);
        }
        else {
            res.status(500).json({ error: 'Account insertion failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred during account insertion' });
    }
}


async function getAccounts(req, res){
    const user = req.user;

    if(!user) return res.status(403).json({ error: 'Access denied' });

    try {
        const accounts = await Account.findAll({ where: { userId: user.id } });

        if (accounts) {
            res.status(200).json(accounts);
        }
        else {
            res.status(404).json({ error: 'Accounts not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving accounts' });
    }
}


async function updateAccount(req, res){
    const user = req.user;

    if(!user) return res.status(403).json({ error: 'Access denied' });

    const { id, token, ...body } = req.body;

    // body.userId = user.id;

    const reqBody = Object.entries(body).reduce((acc, [key, value]) => {
        if (value !== '') {
          acc[key] = value;
        }
        else{
            acc[key] = null;
        }
        return acc;
    }, {});

    console.log(user);
    console.log(reqBody);

    try {
        const updatedAccount = await Account.update(reqBody, { where: { id: req.body.id, userId: user.id } });

        if (updatedAccount) {
            res.status(200).json(updatedAccount);
        }
        else {
            res.status(500).json({ error: 'Account updation failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred during account updation' });
    }
}


async function deleteAccount(req, res){
    const user = req.user;

    if(!user) return res.status(403).json({ error: 'Access denied' });

    const { id } = req.body;

    try {
        const deletedAccount = await Account.destroy({ where: { id: id, userId: user.id } });

        if (deletedAccount) {
            res.status(200).json(deletedAccount);
        }
        else {
            res.status(500).json({ error: 'Account deletion failed' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred during account deletion' });
    }
}

export { addAccount, getAccounts, updateAccount, deleteAccount }
