var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'Med_Plus',
  password: 'password',
  database: 'med_plus',
});

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

function create_Inventory() {
  var sqlQuery = `CREATE FUNCTION check_inventory (item_name VARCHAR(50), vendorid INTEGER)
  RETURNS INTEGER deterministic
  BEGIN
    DECLARE quantity INTEGER;
    
    SELECT QuantityInStock INTO quantity
    FROM Product
    WHERE Product.ProductName = item_name AND Product.VendorID = vendorid;
    
    RETURN quantity;
  END;`;

  connection.query(sqlQuery, function(err, rows, fields) {
    if (err) {
      return err;
    }
  });
}

router.post('/', function(req, res, next) {
  if (create_Inventory() instanceof Error) {
    res.status(500).send('Error on the server.');
    return;
  }

  var item_name = req.body.item_name;
  var vendorid = req.body.vendorid;

  connection.query('SELECT check_inventory(?, ?)', [item_name, vendorid], function(err, rows, fields) {
    if (err) {
      console.log(err);
      res.status(500).send('Error on the server.');
      return;
    }
    res.status(200).send(rows);
  });
});

module.exports = router;
