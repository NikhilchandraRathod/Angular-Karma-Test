
describe('IncrementController', function(){

  var $rootScope,
      $scope,
      controller;

  beforeEach(function(){
    module("MyApp");

    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('IncrementController',{
        $scope: $scope
      });
    });

  });


  describe("Action Handler", function(){
    describe('incCounter', function(){

      it('Should increment value of counter by 1', function(){
        $scope.incCounter();
        expect($scope.counter).toEqual(1);
      });

      it('Should counter not be greater than 10', function(){
        $scope.counter = 10;
        $scope.incCounter();
        expect($scope.counter).toEqual(10);
      });

    });

    describe('decCounter', function(){

      it('Should decrement value of counter', function(){
        $scope.counter = 1;
        $scope.decCounter();
        expect($scope.counter).toEqual(0);
      });

      it('Should not decrement value while counter is 0', function(){
        $scope.counter = 0;
        $scope.decCounter();
        expect($scope.counter).toEqual(0);
      });

    });

  });


  describe("Initialization", function(){
    it('Should counter increment value is 0', function(){
      expect($scope.counter).toEqual(0);
    });
  });

});