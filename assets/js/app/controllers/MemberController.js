angular.module('natillera')
  .controller('MemberController', ['$scope', function($scope){
    $scope.schema = {
      type:'object',
      properties:{
        name:{
          type:'string',
          title: 'Nombre',
          description: 'Nombre del miembro',
          minLenght: 5
        },
        quotaAmount:{
          type:'number',
          title: 'Valor cuota mensual',
          description: 'Valor que va a pagar el miembro mensualmente',
          min: 50000,
          max: 100000
        }
      }
    };
    $scope.form = [
      "*",
      {
        type: "submit",
        title: "Save"
      }
    ];
    $scope.model = {};
    $scope.onSubmit = function submit(){
    }
  }]);
