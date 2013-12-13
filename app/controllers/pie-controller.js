angular.module("MyApp")
.controller("PieController", [
  "$scope",
  function($scope){
    $scope.eatSlice = function(){
      if($scope.slices){
        $scope.slices--;
      }
    };

    this.setRequestFlavor = function(flavor){
      $scope.lastRequestFlavor = flavor;
    };

    $scope.lastRequestFlavor;
    $scope.slices = 8;
  }
]);