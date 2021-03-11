const R = require('ramda');

class MessageListener {
    constructor(expected, done) {
        this.expected = expected;
        this.done = done;
    }

    onMessage(message) {
        let matchingElt = R.find(R.equals(message), this.expected);
        if (!matchingElt) {
            this.done(`Received unexpected message: ${message}`);
            return; // probably redundant
        }
        this.expected = R.without([matchingElt], this.expected);
        if (this.expected.length === 0) {
            this.done();
        }
    }

}

test("calls done when match 1 item", (done) => {
    const listener = new MessageListener(["hello"], done);
    listener.onMessage("hello")
});

test("calls done when match 1 item complex object", (done) => {
    const obj = {
        foo: "bar",
        baz: 42,
        fizz: ["buzz"]
    };
    const listener = new MessageListener([obj], done);
    listener.onMessage(R.clone(obj));
})

test("calls done when match all items", (done) => {
    const obj = {
        foo: "bar",
        baz: 42,
        fizz: ["buzz"]
    };
    const listener = new MessageListener([obj, "hello", 42], done);
    listener.onMessage(R.clone(obj));
    listener.onMessage(42);
    listener.onMessage("hello");
});