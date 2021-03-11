const uuid = require('uuid');
const WebSocket = require('ws');

const wss = new WebSocket.Server({
    host: "0.0.0.0",
    port: 8082
}, () => console.log('WS server running on port 8082'));

wss.on('connection', (socket, request) => {
    console.log('Server connection open')
    socket.on('message', (data) => {
        console.log(`Server message received: ${data}`)
        const obj = JSON.parse(data);
        if (obj.messageType === "user-init") {
            const response = {
                userName: obj.userName,
                userId: obj.userId
            };
            if (typeof obj.userId === "string") {
                response.messageType = "user-init-success";
            } else {
                response.messageType = "user-init-failure";
                response.details = `Invalid userId: ${obj.userId}`;
            }
            socket.send(JSON.stringify(response), () => console.log("Server message sent"));
        } else if (obj.messageType === "chat-message") {
            socket.send(JSON.stringify({
                messageType: "chat-message",
                timestamp: new Date().now(),
                userName: "some-other-name",
                userId: uuid.v4(),
                text: "Hello world!"
            }))
        }
    })
});