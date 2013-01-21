'use strict';

describe('Controller: TwitterSearchResultsCtrl', function() {

  // load the controller's module
  beforeEach(module('srchrApp'));

  var TwitterSearchResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    TwitterSearchResultsCtrl = $controller('TwitterSearchResultsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
