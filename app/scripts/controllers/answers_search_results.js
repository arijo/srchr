'use strict';

srchrApp.controller('AnswersSearchResultsCtrl', function($scope, answers) {

	// SEARCH RESULTS EMPTY BY DEFAULT
	$scope.results = [];

	// LISTEN FOR USER INITIATED SEARCH EVENTS
	$scope.$on('search', function(ev, search) {

		// ONLY ACCEPT YAHOO ANSWERS SEARCH EVENTS
		if(search.service != 'answers') return;

		// QUERY YAHOO'S YQL ANSWERS API
		answers.search({ 
			q: search.query 
		    }, 
		    $scope.searchComplete, 
		    $scope.errorSearching
		);
	});

	// IS THE SEARCH SUCCESSFUL?
	$scope.searchComplete = function(results) {

		// IF SO THEN UPDATE VIEW
		$scope.results = results;
	};

	// IF THERE WAS AN ERROR SEARCHING ...
	$scope.errorSearching = function(data, status, headers, config) {
	
		// ... THEN OUTPUT THE ERROR MESSAGE TO THE CONSOLE
		console.log(data);
	};
});
