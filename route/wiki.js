
// 
const express = require('express');
const router = express.Router();

console.log("we are at wiki.js page");

router.get('/', function (req, res, next) {
    res.send('got to GET /wiki/');
});

router.post('/', function (req, res, next) {
    res.send('got to POST /wiki/');
});

router.get('/add', function (req, res, next) {
    res.send('got to GET /wiki/add');
});


module.exports = router;