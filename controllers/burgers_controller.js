//Import express and Router packages for custom routing.
var express = require('express');
var router = express.Router();
var burger = require('../models/burger');


router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {burger : data};
    console.log(burgerObject);
    res.render('index', burgerObject);
  console.log('Hello Data is here');
  });
});

module.exports = router;
