

describe('titleCase', function(){

  var $filter, filter;

  beforeEach(function(){
    module('MyApp');

    inject(function($injector){
      $filter = $injector.get('$filter');
      filter = $filter('titleCase');
    });
  });

  it('Should return undefined when undefined is passed in', function(){
    expect(filter(undefined)).toBeUndefined();
  });

  it('Should return null when null is passed in', function(){
    expect(filter(null)).toBeNull();
  });

  it('Should return blank string when blank string passed in', function(){
    expect(filter("")).toEqual("");
  });

  it('Should change the casing of lower case word', function(){
    expect(filter("nikhil rathod")).toEqual("Nikhil Rathod");
  });

  it('Should change the casing of upper case word', function(){
    expect(filter('NIKHIL RATHOD')).toEqual("Nikhil Rathod");
  });

  it('Should change the casing of random case word', function(){
    expect(filter('NiKHIl RaTHod')).toEqual("Nikhil Rathod");
  });

  it('Should play well with normal case', function(){
    expect(filter("Quick Jump A Brown Fox")).toEqual("Quick Jump A Brown Fox");
  });

});