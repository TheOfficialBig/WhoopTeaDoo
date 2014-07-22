var express = require('express');
var router = express.Router();
var fs = require('fs');

var content;
var email;
var telephone;
var address;
var postcode;

fs.readFile('routes/motd.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
});

fs.readFile('routes/email.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    email = data;
});

fs.readFile('routes/telephone.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    telephone = data;
});

fs.readFile('routes/address.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    address = data;
});

fs.readFile('routes/postcode.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    postcode = data;
});

var open;
var dt = new Date();
var day = dt.getDay();

router.get('/', function(req, res) {
    
    if(day > 0){
        if(day < 6) {
            open = "open";
        }
        else {
            open = "closed" ;  
        }
    }
    else {
        open = "closed";   
    }
    
    res.render('index', { title: 'Whoop-Tea-Doo!', message: content, open: open, email: email, telephone: telephone, address: address, postcode: postcode });
});

module.exports = router;