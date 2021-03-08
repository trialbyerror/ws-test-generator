const {userInit, userInitSuccess, userInitFailure, chatMessage} = require("../src/dsl/mockup.js");
const WebSocket = require('ws');

const TEST_URL = "wss://echo.websocket.org";

let socket;
  
beforeEach((done) => {
    socket = new WebSocket(TEST_URL);
    socket.on('open', () => {
      done();
    });
});

afterEach((done) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.close(1000, "happy close");
    }
    done();
});

test("super basic test", (done) => {
    socket.on('message', (data) => {
        console.log(`Message received from server: ${data}`);
        done();
    });
    socket.send("{ \"hello\": \"world\"}", {}, () => {
        console.log("Sent message to server")
    });
});



