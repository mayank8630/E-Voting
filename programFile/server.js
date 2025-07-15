const express = require("express");
const cors = require("cors");
const app = express();
js
const path = require("path");
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
js
const fs = require("fs");
const usersFile = path.join(__dirname, "data", "users.json");
const votesFile = path.join(__dirname, "data", "votes.json");
js
app.post("/api/signup", (req, res) => {
    const { name, email, password } = req.body;

    const users = JSON.parse(fs.readFileSync(usersFile)).users;
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    fs.writeFileSync(usersFile, JSON.stringify({ users }, null, 2));

    res.json({ message: "User registered!" });
});


app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});