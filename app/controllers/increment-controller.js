
angular.module('MyApp')
.controller('IncrementController', [
  "$scope",
  function($scope){

    $scope.counter = 0;

    $scope.incCounter = function(){
      if($scope.counter < 10){
        $scope.counter++;
      }
    };

    $scope.decCounter = function(){
      if($scope.counter)
        $scope.counter--;
    };

  }
]);