var express = require('express');
var router = express.Router();
const rootURL = 'http://localhost:3000'

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect(301, '/register')
});

router.get('/register', function(req, res, next) {
    if (!req.body.email) res.render('register', { title: 'register' });
    else{
        res.send(' ok ')
    }
});

router.get('/login', function(req, res, next) {
    if (!req.body.email) res.render('login', { title: 'login' });
    else{
        res.send(' ok ')
    }
});

module.exports = router;
