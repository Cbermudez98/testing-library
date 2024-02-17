const pretty = require('@mechanicalhuman/bunyan-pretty')
const bunyan = require('bunyan');
class Log {
    #log = null;

    constructor() {
        this.#log = bunyan.createLogger({
            name: 'test',
            stream: pretty(process.stdout, { timeStamps: false }),
            level: 'info',
        });
    }
    success(msg) {
        this.#log.info(msg);
    }

    error(msg) {
        this.#log.error(msg);
    }
}

module.exports = Log;