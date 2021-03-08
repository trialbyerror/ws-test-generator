const generateTests = require("./generate-tests.js");
const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
    generateTests();
    res.send("Hello World\n");
});

app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);