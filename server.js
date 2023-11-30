const express = require("express");
const bodyParser = require("body-parser");

// Import Routes
const userRoutes = require('./routes/userRoutes.js');
const creditCardRoutes = require('./routes/creditCardRoutes.js');
const accountRoutes = require('./routes/accountRoutes.js');
const secureNoteRoutes = require('./routes/secureNoteRoutes.js');
const personalInfoRoutes = require('./routes/personalInfoRoutes.js');

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.send("Cyber Vault Server is Running!");
});

app.use('/api', userRoutes);
app.use('/api', creditCardRoutes);
app.use('/api', accountRoutes);
app.use('/api', secureNoteRoutes);
app.use('/api', personalInfoRoutes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
