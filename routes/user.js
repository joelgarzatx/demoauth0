var express = require('express');
var router = express.Router();
module.exports = router;

var requiresLogin = require('../requiresLogin');

// This demonstrates a page that also requires Login,
// not under /admin

router.get('/',
  requiresLogin,
  function (req, res) {
    res.render('user', {
      user: req.user.nickname
    });
  });
