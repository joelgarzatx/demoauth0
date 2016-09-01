// requiresLogin.js
module.exports = function(req, res, next) {
  if (!req.isAuthenticated()) {
    console.log('Not Authenticated, redirecting to login');
    return res.redirect('/');
  }
  next();
}
