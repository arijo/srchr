'use strict';

srchrApp.controller('TwitterSearchResultsCtrl', function($scope, twitter) {

	// SEARCH RESULTS EMPTY BY DEFAULT
	$scope.results = [];

	// LISTEN FOR USER INITIATED SEARCH EVENTS
	$scope.$on('search', function(ev, search) {
		
		// ONLY ACCEPT TWITTER SEARCH EVENTS
		if(search.service != 'twitter') return;

		// QUERY TWITTER SEARCH API
		twitter.search({ 
			q: search.query 
		    }, 
		    $scope.searchComplete, 
		    $scope.errorSearching
		);
	});

	// IS THE SEARCH SUCCESSFUL?
	$scope.searchComplete = function(results) {

		// IF SO THEN UPDATE THE VIEW
		$scope.results = results;
	};

	// IF THERE WAS AN ERROR SEARCHING ...
	$scope.errorSearching = function(data, status, headers, config) {
	
		// ... THEN OUTPUT THE ERROR MESSAGE TO THE CONSOLE
		console.log(data);
	};
});
