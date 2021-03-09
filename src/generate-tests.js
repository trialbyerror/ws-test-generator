const parse = require("./dsl/parser.js");
const generateGraph = require("./state-machine/state-machine.js");
const writeTests = require("./test-writer/test-writer.js");

// returns a Buffer containing String representation of Jest test file
const generateTests = (apiArr) => {
    const parsedArr = parse(apiArr);
    const graph = generateGraph(parsedArr);
    return writeTests(graph); 
}

module.exports = generateTests;