'use strict';

var app = angular.module('formApp');

var RegistrationController = function(){
  var model = this;

  model.message="";

  model.user = {
    username:"",
    password:"",
    confirmPassword:""
  };
  model.submit = function(isValid){
    console.log("h");
    if (isValid){
      model.message = "Submitted" + model.user.username;

    } else {
      model.message = "There are still invalid fields below";
    }
  };
};

var compareTo = function(){
  return{
    require: "ngModel",
    scope:{
      otherModelValue: "=compareTo"
    },
    link: function(scope)
  }
}
app.controller('formCtrl', function($scope){
  $scope.submitUserForm = function($scope){

    $scope.submitUserForm = function(formInvalid){
      if(formInvalid){
        console.log('form invalid');
      }else{
        console.log('submit:',$scope.user);
      }
  };
})
