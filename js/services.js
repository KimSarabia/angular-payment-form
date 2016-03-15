'use strict';

var app = angular.module('ccApp');

app.service('CcService', function($http){

  this.getAll = function(){
    return $http.get('/ccs')
  };

  this.create = function(newCc){
    return $http.post('/ccs', newCc);
  };

  this.delete = function(home) {
   return $http.delete(`/ccs/${cc.id}`)
 };

})
