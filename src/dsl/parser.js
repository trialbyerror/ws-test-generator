const {userInit, userInitSuccess, userInitFailure, chatMessage} = require("./mockup.js");

// STUB class. Will take input params in future and validate.

const parse = (apiArr) => { 
    console.log("parsing input")
    return [userInit, userInitSuccess, userInitFailure, chatMessage];
}

module.exports = parse;
