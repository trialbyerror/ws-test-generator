const parse = require("./dsl/parser.js");
const generateGraph = require("./state-machine/state-machine.js");
const writeTests = require("./test-writer/test-writer.js");

const generateTests = (arg) => { // TODO: arg - fileName?
    const parsedArr = parse(arg);
    const graph = generateGraph(parsedArr);
    writeTests(graph); // TODO: send file back via server response
}

module.exports = generateTests;