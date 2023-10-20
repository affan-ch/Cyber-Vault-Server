import express from "express";
import bodyParser from "body-parser";

// Import Routes
import userRoutes from './routes/userRoutes.js';
import creditCardRoutes from './routes/creditCardRoutes.js';

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.send("Hello World");
});


app.use('/api', userRoutes);
app.use('/api', creditCardRoutes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
