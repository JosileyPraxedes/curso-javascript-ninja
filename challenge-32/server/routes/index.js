'use strict';

var express = require('express');
var router = express.Router();
var data = [];

router.get('/', function(req, res) {
  res.json(data);
});

router.post('/', function(req, res) {
  var carPlate = req.body.plate;
  var hasCar = data.some(function(car) {
    return car.plate === carPlate;
  });
  if(!hasCar) {
    data.push({
      image: req.body.image,
      brandModel: req.body.brandModel,
      year: req.body.year,
      plate: req.body.plate,
      color: req.body.color
    });
    return res.json({ message: 'carro cadastrado com sucesso' });
  }
  res.json({ message: 'carro já cadastrado' });
});

module.exports = router;
