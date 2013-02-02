'use strict';

describe('Controller: HistoryCtrl', function() {

  // load the controller's module
  beforeEach(module('srchrApp'));

  var HistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    HistoryCtrl = $controller('HistoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
