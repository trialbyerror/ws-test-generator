// Example API to test: basic WS chat app

const userInit = {
    message: {
        name: "user-init", // required field
        from: ["client"], // "client", "server"
        required: true // must appear in every session - default to false
    },
    spec: {
        messageType: "user-init", // exact values specified as literals
        userName: "<string>", // types in diamond brackets
        userId: "<uuid>"
    }
}

const userInitSuccess = {
    message: {
        name: "user-init-success",
        from: ["server"],
        after: ["user-init"], // specifies preconditions 
        required: true
    },
    spec: {
        messageType: "user-init-success",
        userName: "<string>",
        userId: "<uuid>",
        details: "<string>"
    }
}

const userInitFailure = {
    message: {
        name: "user-init-failure",
        from: ["server"],
        after: ["user-init"],
        required: true,
        unhappyPath: true // defaults to false, for error testing flows
    },
    spec: {
        messageType: "user-init-failure",
        userName: "<string>",
        userId: "<uuid>",
        details: "<string>"
    }
}

const chatMessage = {
    message: {
        name: "chat-message",
        from: ["client","server"],
        after: ["user-init","user-init-success"],
        limit: 500 // defaults to 1
    },
    spec: {
        messageType: "chat-message",
        timestamp: "<number>",
        userName: "<string>",
        userId: "<uuid>",
        text: "<string>"
    }
}

console.log(JSON.stringify([userInit, userInitSuccess, userInitFailure, chatMessage]));

// FUTURE EXTENSIONS:
// strict-after: enforces order
// enums, deeper object checks

module.exports = {userInit, userInitSuccess, userInitFailure, chatMessage};