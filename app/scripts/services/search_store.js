'use strict';

srchrApp.factory('searchStore', function() {

  var STORAGE_ID = 'srchr-angularjs';

  return {

    get: function() {

      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },
    put: function(searches) {

	localStorage.setItem(STORAGE_ID, JSON.stringify(searches)); 
    }
  };
});
