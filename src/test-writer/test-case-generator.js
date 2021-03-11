const uuid = require("uuid");

// generates test cases from graph

const TEST_USER_ID = uuid.v4();

const testComponent = {
    send: { // property is either send or receive
        messageType: "user-init",
        userName: "some-name",
        userId: TEST_USER_ID
    },
    receive: undefined,
    expectedState: WebSocket.OPEN // can be undefined or specified 
    // future TODO: add timeout to expect to get the response back
}

const singleTest = {
    name: "user-init user-init-success",
    messages: [
        testComponent, {
            receive: {
                messageType: "user-init-success",
                userName: "some-name",
                userId: TEST_USER_ID,
                details: "some details"
            }
        }
    ]
}

const testCases = [
    singleTest, {
        name: "user-init user-init-failure",
        messages: [
            {
                send: {
                    messageType: "user-init",
                    userName: "some-name",
                    userId: 4
                }
            }, {
                receive: {
                    messageType: "user-init-failure",
                    userName: "some-name",
                    userId: 4,
                    details: "some details"
                }
            }, {
                expectedState: WebSocket.CLOSED
            }
        ]
    }, {
        name: "user-init user-init-success chat-message 2 deep",
        messages: [
            testComponent, {
                receive: {
                    messageType: "user-init-success",
                    userName: "some-name",
                    userId: TEST_USER_ID,
                    details: "some details"
                }
            }, {
                send: {
                    messageType: "chat-message",
                    timestamp: 12345,
                    userName: "some-name",
                    userId: TEST_USER_ID,
                    text: "Hello world"
                }
            }, {
                receive: {
                    messageType: "chat-message",
                    timestamp: 12345,
                    userName: "some-name",
                    userId: TEST_USER_ID,
                    text: "Hello world"
                }
            }
        ]
    }
]

// returns array of test cases
const generateTestCases = (graph) => {
    console.log("generating array of test cases");
    return testCases;
}

module.exports = generateTestCases;