const generateTestCases = require('./test-case-generator.js');
const formatTests = require('./test-formatter.js');

const writeTests = (graph) => {
    const testCasesArr = generateTestCases(graph);
    return formatTests(testCasesArr);
}

module.exports = writeTests;