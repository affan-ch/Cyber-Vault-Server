import express from "express";
import bodyParser from "body-parser";

// Import Routes
import userRoutes from './routes/userRoutes.js';
import creditCardRoutes from './routes/creditCardRoutes.js';
import accountRoutes from './routes/accountRoutes.js';
import secureNoteRoutes from './routes/secureNoteRoutes.js';
import personalInfoRoutes from './routes/personalInfoRoutes.js';

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
