'use strict';

describe('Service: twitter', function () {

  // load the service's module
  beforeEach(module('srchrApp'));

  // instantiate service
  var twitter;
  beforeEach(inject(function(_twitter_) {
    twitter = _twitter_;
  }));

  it('should do something', function () {
    expect(!!twitter).toBe(true);
  });

});
