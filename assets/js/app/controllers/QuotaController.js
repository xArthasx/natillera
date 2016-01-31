var monthNames =["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ];
angular.module('natillera').controller('QuotaController', ['$scope', '$http', '$window', function($scope, $http, $window){
  var quotasOwed = [];
  angular.forEach($window.quotasOwed,function(quota){
    quotasOwed.push({
      value:quota.id,
      name:monthNames[new Date(quota.lastDayOfPayment).getMonth()]
    });
  });
  $scope.schema = {
    type:'object',
    properties:{
      quota:{
        title:'Mes de la cuota',
        type: 'string'
      },
      fine:{
        title:'Total pago realizado (vacío cuando no se cobran intereses de mora)',
        type: 'number'
      }
    }
  };
  $scope.form=[
    {
      key:'quota',
      type: 'select',
      titleMap:quotasOwed,
      required: true
    },
    {
      key:'fine',
    },
    {
      type:'submit',
      title:'Guardar'
    }
  ];
  $scope.model={};
  $scope.onSubmit = function onSubmit(myForm){
    $scope.$broadcast('schemaFormValidate');
    if(myForm.$valid){
      $http.post('/quota/pay', $scope.model).then(function(response){
        window.location = '/';
      }).catch(function(response){
        alert('error');
      }
      ).finally(function(){
      }
      );
    }
  }
}]);

