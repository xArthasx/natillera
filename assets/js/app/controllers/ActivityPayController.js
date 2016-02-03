angular.module('natillera').controller('ActivityPayController', ['$scope', '$http', '$window', function($scope, $http, $window){
  var members = $window.members;
  var titleMap = [];
  angular.forEach(members, function(member){
    titleMap.push({
      name:member.name,
      value: member.id
    });
  });
  $scope.schema = {
    type:'object',
    properties: {
      member:{
        type:'string',
        required:true,
        title:'Miembro'
      }
    }
  }
  $scope.form = [
    {
      key:'member',
      titleMap:titleMap,
      type:'select'
    },
    {
      type:'submit',
      title:'Guardar'
    }
  ];
  $scope.model = {
    activity:$window.activity.id
  };
  $scope.onSubmit = function onSubmit(myForm){
    $scope.$broadcast('schemaFormValidate');
    if(myForm.$valid){
      $http.post('/activity/' + $window.activity.id + '/pay',$scope.model).then(function(response){
        window.location = '/';
      }).catch(alert);
    }
  };
}]);
