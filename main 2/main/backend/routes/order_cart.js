var mysql = require('mysql');
var express = require('express');
var router = express.Router();

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

const sqlQuery = `
  CREATE FUNCTION order_cart (user_id INTEGER)
  RETURNS INTEGER DETERMINISTIC
  BEGIN
      DECLARE price DECIMAL(10,2);
      DECLARE oid INTEGER;

      SELECT SUM(Product.Price * Cart.Quantity)
      INTO price
      FROM Product
      JOIN Cart ON Product.ProductID = Cart.ProductID
      WHERE Cart.UserID = user_id;

      UPDATE Product
      SET QuantityInStock = QuantityInStock - (
          SELECT Quantity
          FROM Cart
          WHERE Cart.ProductID = Product.ProductID
          AND Cart.UserID = user_id
      )
      WHERE ProductID IN (
          SELECT ProductID
          FROM Cart
          WHERE Cart.UserID = user_id
      );

      DELETE FROM Cart
      WHERE Cart.UserID = user_id;

      INSERT INTO Orders (OrderDate, UserID, TotalAmount, Payment_Method)
      VALUES (CURRENT_DATE(), user_id, price, 'upi');

      SELECT OrderID INTO oid
      FROM Orders
      ORDER BY OrderID DESC LIMIT 1;

      INSERT INTO Delivery (OrderID, DeliveryStatus, EstimatedDeliveryDate)
      VALUES (oid, 'Packing', DATE_ADD(CURRENT_DATE(), INTERVAL 3 DAY));

      RETURN 0;
  END;
`;

connection.query(sqlQuery, function(err, rows, fields) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Function created');
});

router.post('/', function(req, res, next) {
  var user_id = req.body.user_id;
  connection.query('SELECT order_cart(?)', [user_id], function(err, rows, fields) {
    if (err) {
      console.log(err);
      res.status(500).send('Error on the server.');
      return;
    }
    res.status(200).send('Order placed successfully');
  });
});

module.exports = router;
