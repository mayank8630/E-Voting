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

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});