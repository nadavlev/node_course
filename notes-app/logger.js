const debug = require('debug');
const chalk = require('chalk');

const createLogger = function(className) {
    return debug(className);
}

const logOk = function(msg) {
    return chalk.green(msg);
}

const logWarn = function(msg) {
    return chalk.yellow(msg);
}

const logger = {

}

module.exports = {
    createLogger,
    logOk,
    logWarn
};
