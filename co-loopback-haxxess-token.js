module.exports = function (server) {
  var AccessToken = server.models.AccessToken

  // Dig out which user it is from somewhere in the request
  // and attach it to the response object for this function
  AccessToken.findForRequest = function (req, options, cb) {
    var userId = req.query.access_token || req.headers.authorization
    cb(null, { userId })
  }
}
