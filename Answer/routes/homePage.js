var express = require('express');
var router = express.Router();
const rootURL = 'http://localhost:3000'


router.get('/homePage', function(req, res, next) {
    res.render("homePage",{product:[{name:"1"},{name:"2"}]})
});


const loginOutRouter = require("./loginOut")
router.use(loginOutRouter)


module.exports = router;
