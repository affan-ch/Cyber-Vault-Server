import express from "express";
import bodyParser from "body-parser";
import dbConfig from "./db/connection.js";
import signup from "./db/signup.js";
import login from "./db/login.js";
import getSaltByEmail from "./db/getSaltByEmail.js";

const app = express();

app.use(bodyParser.json());

app.post("/api/signup", async (req, res) => {
    console.log(req.body);

    const { name, email, password, salt } = req.body;
    const object = { name, email, password, salt };
    const result = await signup(dbConfig.url, dbConfig.databaseName, "users", object);
    console.log(result);
    res.send("Signup successful");
});

app.post("/api/login", async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;
    const object = { email, password };
    const result = await login(dbConfig.url, dbConfig.databaseName, "users", object);
    console.log(result);
    if (result) {
        res.send("Login successful");
    }
    else{
        res.send("Login unsuccessful");
    }
});

app.post("/api/getSaltByEmail", async (req, res) => {
    console.log(req.body);

    const { email } = req.body;
    const object = { email };
    const result = await getSaltByEmail(dbConfig.url, dbConfig.databaseName, "users", object);
    console.log(result);
    if (result) {
        res.send(result);
    }
    else{
        res.send("Login unsuccessful");
    }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
