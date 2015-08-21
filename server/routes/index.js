var express = require('express');//requires express
var router = express.Router();//creates an instance of express Router

//original attempt
// router.get('/add/:num/:num2', function(req, res, next) {
//   var add = parseInt(req.params.num) + parseInt(req.params.num2);
//   res.send(add.toString());
// });

// router.get('/subtract/:num/:num2', function(req, res, next) {
//   var subtract = parseInt(req.params.num) - parseInt(req.params.num2);
//   res.send(subtract.toString());
// });

// router.get('/multiply/:num/:num2', function(req, res, next) {
//   var multiply = parseInt(req.params.num) * parseInt(req.params.num2);
//   res.send(multiply.toString());
// });

// router.get('/divide/:num/:num2', function(req, res, next) {
//   var divide = parseInt(req.params.num) / parseInt(req.params.num2);
//   res.send(divide.toString());
// });

//all in one
router.get('/:math/:num1/:num2', function(req, res, next) {
  if (req.params.math === 'add') {
    var add = parseInt(req.params.num1) + parseInt(req.params.num2);
    res.send(add.toString());
  }
  if (req.params.math === 'subtract') {
    var subtract = parseInt(req.params.num1) - parseInt(req.params.num2);
    res.send(subtract.toString());
  }
  if (req.params.math === 'multiply') {
    var multiply = parseInt(req.params.num1) * parseInt(req.params.num2);
    res.send(multiply.toString());
  }
  if (req.params.math === 'divide'){
    var divide = parseInt(req.params.num1) / parseInt(req.params.num2);
    res.send(divide.toString());
  }
});

module.exports = router;
