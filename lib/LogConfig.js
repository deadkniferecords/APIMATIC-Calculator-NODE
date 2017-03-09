'use strict';

var logger = require('winston');

var LogConfig = function () {
    logger.configure({
        transports: [
            new (logger.transports.Console)({
                level: 'info',
                colorize: true,
                timestamp: true
            }),
            new (logger.transports.File)({
                filename: 'logfile.log',
                level: 'debug',
                colorize: true,
                timestamp: true
            })
        ]
    });
}

module.exports = LogConfig;
