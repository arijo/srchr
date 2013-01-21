'use strict';

describe('Controller: SearchBarCtrl', function() {

  // load the controller's module
  beforeEach(module('srchrApp'));

  var SearchBarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    SearchBarCtrl = $controller('SearchBarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
