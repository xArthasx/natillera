angular.module('natillera').controller('PaymentController',['$scope', '$http', '$window', function($scope, $http, $window){
  var loan = $window.loan;
  $scope.schema = {
    type:'object',
    properties:{
      amount:{
        type:'number',
        required:true,
        title:'Cantidad a pagar'
      },
      tax:{
        type:'number',
        required:true,
        title:'Cantidad de pago en intereses'
      }
    }
  };
  $scope.form = [
    "*",
    {
      type:'submit',
      title:'Guardar'
    }
  ];
  var tax = loan.amount*loan.rate/100;
  var amount = loan.amount + tax;
  angular.forEach(loan.payments, function(payment){
    amount -= (payment.amount - payment.tax)
  });
  $scope.model = {loan:loan.id, tax:tax, amount:amount};
  $scope.onSubmit = function onSubmit(myForm){
    $scope.$broadcast('schemaFormValidate');
    if(myForm.$valid){
      $http.post('/payment/create',$scope.model).then(function(response){
        window.location = '/';
      }).catch(function(response){
        alert('error');
      });
    }
  };
}]);
