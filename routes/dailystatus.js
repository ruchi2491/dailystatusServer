var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Status = require('../models/dailystatus.js');

/* GET ALL Status */
router.get('/', function(req, res, next) {
  Status.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Status BY ID */
// router.get('/:id', function(req, res, next) {
//   Status.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//     });
// });

/* GET SINGLE Status BY ID */
router.get('/:id', function(req, res, next) {
  Status.find({empid:req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id/:date', function(req, res, next) {
  Status.find({empid:req.params.id,date:req.params.date}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* SAVE Status */
router.post('/', function(req, res, next) {
  Status.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Status */
router.put('/:id', function(req, res, next) {
  Status.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Status */
router.delete('/:id', function(req, res, next) {
  Status.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;