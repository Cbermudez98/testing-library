const Log = require("./logs");

class Message {
    constructor() {
        this.logger = new Log();
    }
    success(name) {
        const message = `PASSED: ${name}`;
        this.logger.success(message);
    }

    error(name, reason) {
        const message = `${name}: FAILED - ${reason}`;
        this.logger.error(message);
    }
}

module.exports = Message;