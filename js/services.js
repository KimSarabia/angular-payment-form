'use strict';

var app = angular.module('formApp');

app.service('HomeService', function($http){

  this.getAll = function(){
    return $http.get('/ccs')
  };

  this.create = function(newHome){
    return $http.post('/ccs', newHome);
  };

  this.delete = function(home) {
   return $http.delete(`/ccs/${cc.id}`)
 };

 this.update = function(editHome){
    return $http.put('/ccs', editHome);
 };
})
