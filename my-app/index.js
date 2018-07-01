'use strict'

const logger = require('winston')

logger.info(`Starting server :`, { pid: process.pid })

require('./views')