var express = require('express');
var router = express.Router();

router.get('/signin', function(req, res, next) {
    res.render('signin', {
        title: "Kaafila - Shiv Nadar School Noida",
        styles: [
            '/css/navbar_logo.css',
            '/css/signin.css',
        ],
        scripts: [
            '/js/google_signin.js'
        ]
    });
});

router.get('/signup', function(req, res, next) {
    res.render('signup', {
        title: "Kaafila - Shiv Nadar School Noida",
        styles: [
            '/css/navbar_logo.css',
            '/css/signup.css',
        ],
        scripts: [
            '/js/google_signin.js'
        ]
    });
});

