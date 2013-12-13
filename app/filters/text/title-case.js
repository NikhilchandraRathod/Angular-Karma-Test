
angular.module('MyApp')
.filter('titleCase', [
  function(){
    return function(val){
      return val ? val.replace(/\w\S*/g,function(text){
        return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
      }) : val;
    }
  }
]);