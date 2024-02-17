# Testing.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Testing.js is a lightweight JavaScript testing library that provides a simple and intuitive way to write and run tests for your JavaScript code. It allows you to define test cases with custom assertions and provides informative output about test results.

## Installation

You can install Testing.js via npm:

```bash
npm install testing-library-js`
```

## Usage

To use Testing.js in your JavaScript projects, simply import it into your test files:

```javascript
const Testing = require("testing-js");`
```

## Example
You can define tests using the `it()` method, which takes a name for the test and a test function:

```javascript
const testing = new Testing();

testing.it('should return true for positive numbers', () => {
    testing.expect(5).isNumber().isGreaterThan(0);
});

testing.it('should return false for empty strings', () => {
    testing.expect("").isString().toBeFalsy();
});
```

## Matchers

Testing.js provides a variety of built-in matchers for common assertions:

-   `isNumber()`: Asserts that the value is a number.
-   `isString()`: Asserts that the value is a string.
-   `equalsTo(expected)`: Asserts that the value equals the expected value.
-   `isGreaterThan(expected)`: Asserts that the value is greater than the expected value.
-   `isLessThan(expected)`: Asserts that the value is less than the expected value.
-   `toBeTruthy()`: Asserts that the value is truthy.
-   `toBeFalsy()`: Asserts that the value is falsy.

## Running Tests
After defining your tests, you can run them using the `runTests()` method:
```javascript
testing.runTests();
```
This will execute all the defined tests and display the results in the console.
## Contributing

If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on [Github](https://github.com/Cbermudez98).
## Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/Cbermudez98/testing-library/issues).
