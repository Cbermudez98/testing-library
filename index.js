const Testing = require("./src");

const testing = new Testing();

testing.it("2 must be equals to 2", () => {
    testing.expect(2).equalsTo(2);
});

testing.it("3 must be greater than 1", () => {
    testing.expect(3).isNumber().isGreaterThan(1);
});

testing.it("1 must be less than 3", () => {
    testing.expect(1).isLessThan(3);
});

testing.it("Must be a string", () => {
    testing.expect(4).isString();
});

testing.runTests();