const Message = require("./messageBuilder.js");

class Testing {
    #tests = [];
    #currentTest = null;
    #matchers = [];
    #message = null;
    constructor() {
        this.#message = new Message();
    }

    it(name, testFunction) {
        this.#currentTest = { name, test: testFunction };
        this.#tests.push(this.#currentTest);
        this.#matchers = [];
        return this;
    }

    expect(expect) {
        this.#matchers.push(expect);
        return this;
    }

    isNumber() {
        const num = this.#matchers[this.#matchers.length - 1];
        if(typeof num !== "number") throw new Error(`${num} not a number`);
        return this;
    }


    equalsTo(expect) {
        const actual = this.#matchers[this.#matchers.length - 1];
        if(expect !== actual) throw new Error(`${expect} not equals to ${actual}`);
    }

    isGreaterThan(actual) {
        const matcher = this.#matchers[this.#matchers.length - 1];
        if(actual >= matcher) throw new Error(`${actual} not grater than ${matcher}`);
        return this;
    }

    isLessThan(actual) {
        const matcher = this.#matchers[this.#matchers.length - 1];
        if(actual <= matcher) throw new Error(`${actual} is wwwwnot less than ${matcher}`);
        return this;
    }

    isString() {
        const actual = this.#matchers[this.#matchers.length - 1];
        if(typeof actual !== "string") throw new Error("It's not a string");
        return this;
    }

    toBeTruthy() {
        const actual = this.#matchers[this.#matchers.length - 1];
        if(!actual) throw new Error("It's not truthy");
        return this; 
    }

    toBeFalsy() {
        const actual = this.#matchers[this.#matchers.length - 1];
        if(actual) throw new Error("It's not falsy");
        return this;
    }

    runTests() {
        this.#tests.forEach(({ name, test }) => {
            try {
                test(this.expect.bind(this));
                this.#message.success(name);
            } catch (error) {
                this.#message.error(name, error.message);
            } finally {
                this.#matchers.pop();
            }
        });
    }
}

module.exports = Testing;