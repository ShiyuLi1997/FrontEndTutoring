const express = require('express');
const router = express.Router();
const rootURL = 'http://localhost:3000'


const loginOutRouter = require("./loginOut")
router.use(loginOutRouter)
const homePage = require("./homePage")
router.use(homePage)

router.get('/', function(req, res, next) {
  res.redirect(301, '/register')
});

router.get('/index', function(req, res, next) {
  res.redirect(301, '/register')
});

module.exports = router;
