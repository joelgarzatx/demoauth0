var express = require('express');
var router = express.Router();
module.exports = router;

var requiresLogin = require('../requiresLogin');

// This route demonstrates requiring route under /admin to
// require Login in order to access, using the .all method

router.all('*',
  requiresLogin,
  function (req, res) {
    res.render('user', {
      user: req.user.nickname
    });
  });

router.get('/', function (req, res) {
  res.render('user', {
    user: req.user.nickname
  });
});

router.get('/:user', function(req, res) {
  res.render('user', {
    user:req.user.nickname
  });
});
