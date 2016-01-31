angular.module('natillera').controller('LoanController', ['$scope', '$http', '$window', function($scope, $http, $window){
  var responsibles = [];
  angular.forEach($window.members, function(member){
    responsibles.push({
      value:member.id,
      name:member.name
    });
  });
  $scope.schema = {
    type:'object',
    properties: {
      responsible:{
        title:'Responsable',
        type:'string'
      },
      amount:{
        type:'number',
        title:'Cantidad a prestar'
      },
      rate:{
        type:'number',
				title:'Intereses',
        enum:[5,10]
      }
    }
  };
  $scope.form = [
    {
      key:'responsible',
      type:'select',
      titleMap:responsibles,
      required:true
    },
    {
      key:'amount',
      required:true
    },
    {
      key:'rate',
      required:true
    },
    {
      type:'submit',
      title:'Guardar'
    }
  ];
  $scope.model = {};
  $scope.onSubmit = function onSubmit(myForm){
    $scope.$broadcast('schemaFormValidate');
    if(myForm.$valid){
      $http.post('/loan/create',$scope.model).then(function(response){
        window.location = '/';
      }).catch(function(response){
        alert('error');
      });
    }
  };
}]);
