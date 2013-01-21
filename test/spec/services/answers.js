'use strict';

describe('Service: answers', function () {

  // load the service's module
  beforeEach(module('srchrApp'));

  // instantiate service
  var answers;
  beforeEach(inject(function(_answers_) {
    answers = _answers_;
  }));

  it('should do something', function () {
    expect(!!answers).toBe(true);
  });

});
