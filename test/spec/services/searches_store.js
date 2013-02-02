'use strict';

describe('Service: searchesStore', function () {

  // load the service's module
  beforeEach(module('srchrApp'));

  // instantiate service
  var searchesStore;
  beforeEach(inject(function(_searchesStore_) {
    searchesStore = _searchesStore_;
  }));

  it('should do something', function () {
    expect(!!searchesStore).toBe(true);
  });

});
