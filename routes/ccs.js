var express = require('express');
var router = express.Router();

var Cc = require('../models/cc');

router.get('/', (req, res) => {
  Cc.get(function(err, ccs){
    if(err){
     res.status(400).send(err);
     return;
   }
   res.send(ccs);
 });
});

router.put('/', (req, res) => {

  Cc.put(req.body, function(err, ccs){
    if(err){
     res.status(400).send(err);
     return;
   }
   res.send(ccs);
 });
});

router.post('/', (req, res) => {
  var newCc = req.body;
  Home.create(newCc, function(err, savedCc){
    if(err){
     res.status(455).send(err);
   }
   else {
    res.send(newCc)
  }
 });
});

router.delete('/:id', function(req, res){
  var id = req.params.id;
  console.log('id', id)
  Cc.delete(id, function(err){
    if(err){
      res.status(400).send(err);
      return;
    } else {
      res.send();
    }
  });
});

module.exports = router;
