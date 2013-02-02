'use strict';

describe('Controller: AnswersSearchResultsCtrl', function() {

  // load the controller's module
  beforeEach(module('srchrApp'));

  var AnswersSearchResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    AnswersSearchResultsCtrl = $controller('AnswersSearchResultsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
