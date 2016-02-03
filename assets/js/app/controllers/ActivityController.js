var monthNames =["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ];
angular.module('natillera').controller('ActivityController',['$scope','$http', function($scope, $http){
  var lastDaysOfMonth = [];
  angular.forEach(monthNames,function(month, index){
    lastDaysOfMonth.push({
      name:month,
      value: new Date(2016, index+1, 0).toISOString()
    })
  });
  $scope.schema={
    type:'object',
    properties:{
      name:{
        type:'string',
        required:true,
        title:'Nombre'
      },
      lastDayOfPayment:{
        type:'string',
        title:'Mes de la actividad',
        required:true,
      }
    }
  };
  $scope.form = [
    "name",
    {
      key:'lastDayOfPayment',
      type:'select',
      required:true,
      titleMap:lastDaysOfMonth
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
      $http.post('/activity/create',$scope.model).then(function(response){
        window.location = '/';
      }).catch(alert);
    }
  };
}])
