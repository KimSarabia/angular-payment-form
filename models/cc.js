'use strict'

var fs = require('fs');
var path = require('path');
var uuid = require('uuid');

var homeFilePath = path.join(__dirname, "../data/cc.json")


exports.write = function(ccs, cb) {
  fs.writeFile(homeFilePath, JSON.stringify(ccs), cb);
};

exports.get = function(cb){
  fs.readFile(homeFilePath, function(err, data){
    if(err) return cb(err);
    var ccs = JSON.parse(data);
    cb(null, ccs);
  });
}

exports.create = function(newCc, cb) {

  this.get((err, ccs) => {
    if(err) return cb(err);
    newCc.id = uuid();
    homes.push(newCc);
    this.write(ccs, function(err){
      cb(err, newCc);
    });
  });
};

exports.delete = function(id, cb)  {
  this.get((err, homes) => {
    console.log('export1')
    var length = homes.length
    homes = homes.filter(function(viewHome){
      console.log('export2')
      return viewHome.id !== id;
    });
    if(length === homes.length) {
      cb( {err: "Home not found"});
    }
    this.write(homes, cb);
  });
}
