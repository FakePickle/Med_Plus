var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var bodyParser = require('body-parser');

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router;