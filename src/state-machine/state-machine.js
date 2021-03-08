// build graph based on expected messages

const mockupGraph = {
    messageName: "user-init",
    node: {
        message: {
            name: "user-init", 
            from: ["client"], 
            required: true 
        },
        spec: {
            messageType: "user-init", 
            userName: "<string>", 
            userId: "<uuid>"
        }
    },
    next: [
        {
            messageName: "user-init-success",
            node: {
                message: {
                    name: "user-init-success",
                    from: ["server"],
                    after: ["user-init"], 
                    required: true
                },
                spec: {
                    messageType: "user-init-success",
                    userName: "<string>",
                    userId: "<uuid>",
                    details: "<string>"
                }
            },
            next: {
                messageName: "chat-message",
                node: {
                    message: {
                        name: "chat-message",
                        from: ["client","server"],
                        after: ["user-init","user-init-success"],
                        limit: 500 
                    },
                    spec: {
                        messageType: "chat-message",
                        timestamp: "<number>",
                        userName: "<string>",
                        userId: "<uuid>",
                        text: "<string>"
                    }
                },
                next: []
            }
        },
        {
            messageName: "user-init-failure",
            node: {
                message: {
                    name: "user-init-failure",
                    from: ["server"],
                    after: ["user-init"],
                    required: true,
                    unhappyPath: true 
                },
                spec: {
                    messageType: "user-init-failure",
                    userName: "<string>",
                    userId: "<uuid>",
                    details: "<string>"
                }
            },
            next: []
        }
    ]
}

// STUB graph 
const generateGraph = (parsedArr) => {
    console.log("generating graph")
    return mockupGraph;
}

module.exports = generateGraph;