var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: "Kaafila - Shiv Nadar School Noida",
        headerStyles: [
            '/css/navbar.css',
            '/css/hero-banner.css'
        ],
        scripts: ['/js/navbar.js']
    });
});


router.get('/signup', function(req, res, next) {
    res.render('signup', {
        title: "Kaafila - Shiv Nadar School Noida",
    });
});

module.exports = router;
