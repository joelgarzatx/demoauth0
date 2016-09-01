require('dotenv').config();
var express = require('express');
var router = express.Router();

// Auth0 environment variables in .env
var domain = process.env.AUTH0_DOMAIN;
var clientID = process.env.AUTH0_CLIENTID;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Service Manager',
    domain: domain,
    clientID: clientID,
 });
});

module.exports = router;
