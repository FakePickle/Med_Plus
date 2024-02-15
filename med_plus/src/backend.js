import express from 'express';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.42.85',
  user: 'DBMS',
  password: 'password',
  database: 'Med_Plus'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



const app = express();
app.use(express.json());


