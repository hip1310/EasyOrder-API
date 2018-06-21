/**
 * @description Configures application to use environment variables from .env file
 * @description Makes environment variables available as `process.env.<VARIABLE_NAME>`
 * @description Used when starting up the application
 */

const dotenv = require('dotenv')

module.exports = () => {
  dotenv.config()
}
