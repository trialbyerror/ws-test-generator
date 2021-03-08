const generateTestCases = require('./test-case-generator.js');
const writeTestsToFile = require('./file-writer.js');

const writeTests = (graph) => {
    const testCasesArr = generateTestCases(graph);
    writeTestsToFile(testCasesArr);
}

module.exports = writeTests;