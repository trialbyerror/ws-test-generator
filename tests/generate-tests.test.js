const generateTests = require("../src/generate-tests.js");
const chatApi = require("./resources/chat-api.json");

test("generateTests produces expected test output", () => {
    const buf = generateTests(chatApi);
})
