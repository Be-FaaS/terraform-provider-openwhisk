/*
 * http://localhost:3233/api/v1/web/guest/befaas/ENDPOINT_NAME
*/

module.exports.main = require('@befaas/lib/openwhisk')(() => require('./index.js'))
