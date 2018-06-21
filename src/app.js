/**
 * @description Bootstraps the Express app
 */

const express = require('express')

/**
 * @description Configure the Express instance
 * @type {*}
 */
const app = express()

/**
 * @const listen
 * @description Starts the web server
 */
app.listen(3005, () => {
  console.log('EasyOrder API running on port 3005')
})
