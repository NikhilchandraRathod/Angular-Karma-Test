
describe("PieController", function(){
  var $rootScope,
      $scope,
      controller;

  beforeEach(function(){
    module("MyApp");

    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')("PieController", { $scope: $scope });
    });

  });

  describe('Action Handlers', function(){
    describe('eatSlice', function(){
      it('Should decrement the number of slices', function(){
        expect($scope.slices).toEqual(8);
        $scope.eatSlice();
        expect($scope.slices).toEqual(7);
      })

      it('Should do nothing when slices is 0', function(){
        $scope.slices = 0;
        $scope.eatSlice();
        expect($scope.slices).toEqual(0);
      })
    });

    describe('setRequestFlavor', function(){  
      it('Should set $scope.lastRequestFlavor to the pass in argument', function(){
        controller.setRequestFlavor('Cherry');
        expect($scope.lastRequestFlavor).toEqual('Cherry');
      });
    });

  });

  describe('Initialization', function(){
    it('Should instantiate slices to 8', function(){
      expect($scope.slices).toEqual(8);
    });

    it('Should initiative $scope.lastRequestFlavor', function(){
      expect($scope.lastRequestFlavor).toBeUndefined();
    });
  });


});