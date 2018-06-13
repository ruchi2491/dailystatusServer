var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/Employee.js');

/* GET ALL Employee */
router.get('/', function(req, res, next) {
  Employee.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Employee BY ID */
router.get('/:id', function(req, res, next) {
  console.log("getting from database"+req.params.id );
  console.log(req.body);
  Employee.find({empid:req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// /* GET SINGLE Employee BY ID */
// router.get('/:id', function(req, res, next) {
//   console.log("getting from database"+req.params.id );
//   Employee.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* SAVE Employee */
router.post('/', function(req, res, next) {
  Employee.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Employee */
router.put('/:id', function(req, res, next) {
   console.log(req.params.id);
   console.log(req.body);
  Employee.findOneAndUpdate({empid:req.params.id},{$set:{token:req.body.token}},{new:true}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// router.put('/:id',function(req,res,next){
//   var employeeid=req.params.id;
//   console.log("employee id"+employeeid);
//   console.log("body"+req.body.token);
//   Employee.findOne({empid:employeeid}, function(err,foundobject){
//     if(err){
//       console.log(err);
//       res.status(500).send();
//     }else{
//       if(!foundobject){
//         res.status(404).send();
//       }else{
//         if(req.body.token){
//           console.log("req.body.token");
//           foundobject.token=req.body.token;
//           console.log(foundobject.token);
//         }
//         foundobject.save(function(err,updatedObject){
//           if(err){
//             console.log(err);
//             res.status(500).send();
//           }else{
//             console.log("updatedObject"+updatedObject);
//             res.send(updatedObject);
//           }
//         });
//       }
//     }
//   });
// });


/* DELETE Employee */
router.delete('/:id', function(req, res, next) {
  Employee.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;