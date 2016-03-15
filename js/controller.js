angular.module('ccApp', [ 'credit-cards'
])

.controller('UserRegisterBill', ['$scope', function($scope){
  $scope.card = {
    'holder_name' : '',
    'number' : '',
    'exp_month' : '',
    'exp_year' : '',
    'cvc' : ''
  }

  $scope.pay = function()
  {
    alert(JSON.stringify($scope.card));
  }

}])

.filter('yesNo', function () {

  return function (boolean) {

    return boolean ? 'Yes' : 'No';

  }

})
