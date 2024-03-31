var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'Med_Plus',
  password: 'password',
  database: 'med_plus',
});

router.get('/', function(req, res, next) {
  res.send("Signup page")
});

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res, next) {
  console.log(req.body);
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var password = req.body.password;
  connection.query('INSERT INTO Users (FirstName, LastName, Email, PWD, Address, Phone, DateOfBirth, Age, EmergencyPhone, BillingDetails) \
  VALUES (?, ?, ?, ?,?,?,?,?,?,?)', [firstname, lastname, email, password, 110020,  9018327401, '2005-12-1', 16, null, 'card'], function(err, rows, fields) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.status(200).send('Signup successful');
  });
});

module.exports = router;
