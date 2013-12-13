
angular.module('MyApp')
  .value('DessertValues', {
    pies: [
      { flavor: 'Cherry', score: 6 },
      { flavor: 'Apple', score: 7.5 },
      { flavor: 'Peach', score: 4 }
    ]
  });

angular.module('MyApp')
.factory('DessertManager', [
  'DessertValues',
  function(DessertValues){
    return {
      pieFlavors: function(){
        return DessertValues.pies.map(function(pie){
          return pie.flavor;
        });
      }
    }
  }
]);