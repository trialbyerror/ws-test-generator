const generateTests = require("./generate-tests.js");
const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
    generateTests();
    res.send("Hello World\n");
});

var text="test(\"a test\", () => { console.log(\"Hello World!\") })";
app.get('/test',function(req,res){
   res.set({"Content-Disposition":"attachment; filename=api.test.js"});
   res.send(Buffer.from(text));
});

app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);