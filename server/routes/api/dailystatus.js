var Status = require('../../../models/dailystatus.js');

module.exports = {
  getDailystatus: function (req, res) {
    Status.find(function (err, products) {
      if (err) {
        res.send(err);
      }
      res.json(products);
    });
  },
  getDailystatusId: function (req, res) {
    Status.find({empid:req.params.id}, function (err, post) {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  },

  getDailystatusIdDate : function(req,res){
    Status.find({empid:req.params.id,date:req.params.date}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  },

  setDailystatus: function(req,res){
    Status.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });   
  },

  updateDailystatus : function(req,res){
    Status.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  },

  deleteDailystatus : function(req,res){
    Status.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  }
}
