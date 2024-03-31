var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// Create connection to MySQL database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'Med_Plus',
    password: 'password',
    database: 'med_plus',
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

router.get('/', function(req, res, next) {
    res.send("Login page")
});

// Define the login route
router.post('/', function(req, res, next) {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;
    console.log(email,password);

    connection.query('SELECT * FROM Users WHERE Email = ? AND PWD = ?', [email, password], function(err, rows, fields) {
        if (err) {
            console.log(err);
            res.status(500).send('Error on the server.');
            return;
        }
        if (rows.length > 0) {
            res.status(200).send('Login successful');
        } else {
            res.status(400).send('Invalid email or password');
        }
    });
});


module.exports = router;
