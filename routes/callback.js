var express = require('express');
var router = express.Router();
var passport = require('passport');

module.exports = router;
// Auth0 callback handler
router.get('/',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/user");
  });
