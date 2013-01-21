'use strict';

srchrApp.factory('twitter', function($http) {

  var baseURL = 'http://search.twitter.com/search.json?q=',
      callback = '&callback=JSON_CALLBACK';

  return {
	
	  search: function(params, success, error) {

		  var url = baseURL + encodeURIComponent(params.q) + callback;

		  $http.jsonp(url).success(function(data, status, headers, config) { 

				var results = data.results;

				success(results || []);

			}).error(function() {
				
				error(arguments);
			});
	  }
  };
});
