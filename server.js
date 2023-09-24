import express from "express";
import bodyParser from "body-parser";
import dbConfig from "./db/connection.js";
import signup from "./db/signup.js";

const app = express();

app.use(bodyParser.json());

app.post("/api/signup", async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;
    const object = { email, password };
    const result = await signup(dbConfig.url, dbConfig.databaseName, "users", object);
    console.log(result);
    res.send("Signup successful");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
