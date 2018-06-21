/**
 * @description Bootstraps the Express app
 */

const express = require('express')

// Configure environment
require('./config/server/configureEnvironment')()

/**
 * @description Configure the Express instance
 * @type {*}
 */
const app = express()

/**
 * @const listen
 * @description Starts the web server
 */
app.listen(process.env.PORT, () => {
  console.log(`EasyOrder API running on port ${process.env.PORT}`)
})
