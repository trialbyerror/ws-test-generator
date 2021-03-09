const uuid = require("uuid");
const R = require("ramda");
// dependencies
const WebSocket = require('ws');

// top-level variables
const TEST_URL = process.env.TEST_URL;
let socket;

beforeEach((done) => {
    socket = new WebSocket(TEST_URL);
    socket.on('open', () => {
      done();
    });
});

afterEach((done) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.close(1000, "client close");
    }
    done();
});

class MessageListener {
    constructor(expected, done) {
        this.expected = expected;
        this.done = done;
    }

    onMessage(message) {
        let matchingElt = R.find(R.equals(message));
        if (!matchingElt) {
            this.done(`Received unexpected message: ${message}`);
            return; // probably redundant
        }
        this.expected = R.without(matchingElt);
        if (this.expected.length === 0) {
            this.done();
        }
    }

}

test("user-init user-init-success", (done) => {
    const TEST_USER_ID = uuid.v4();
    const expected = [{
        messageType: "user-init", // TODO: set up testing server to actually respond with API messages?
        userName: "some-name",
        userId: TEST_USER_ID,
        // details: "some details"
    }];
    const listener = new MessageListener(expected, done);
    socket.on('message', (data) => {
        console.log(`Message received from server: ${data}`);
        listener.onMessage(data);
    });
    socket.send(JSON.stringify({
        messageType: "user-init",
        userName: "some-name",
        userId: TEST_USER_ID
    }));
});



