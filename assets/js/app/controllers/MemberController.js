angular.module('natillera')
  .controller('MemberController', ['$scope', '$http', function($scope, $http){
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
        }
      }
    };
    $scope.form = [
      "*",
      {
        type: "submit",
        title: "Guardar"
      }
    ];
    $scope.model = {};
    $scope.onSubmit = function submit(myForm){
      $scope.$broadcast('schemaFormValidate');
      if(myForm.$valid){
        $http.post('/member/create', $scope.model).then(function(response){
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
