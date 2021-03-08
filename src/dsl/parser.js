const {userInit, userInitSuccess, userInitFailure, chatMessage} = require("./mockup.js");

// STUB class. Will take input params in future and validate.

const parse = (arg) => { // TODO: arg: filename?
    console.log("parsing input")
    return [userInit, userInitSuccess, userInitFailure, chatMessage];
}

module.exports = parse;
