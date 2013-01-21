'use strict';

srchrApp.factory('answers', function($http) {

  var baseURL = 'http://query.yahooapis.com/v1/public/yql?q=',
      yql1 = 'select * from answers.search where query="',
      yql2 = '" and type="resolved"',
      format = '&format=json',
      callback = '&callback=JSON_CALLBACK';

  return {
	
	  search: function(params, success, error) {

		  var yql = yql1 + params.q + yql2,
		      url = baseURL + encodeURIComponent(yql) + format + callback;

		  $http.jsonp(url).success(function(data, status, headers, config) { 

				var query = data && data.query,
				    results = query && query.results,
				    question = results && results.Question;

				success(question || []);

			}).error(function() {
				
				error(arguments);
			});
	  }
  };
});
