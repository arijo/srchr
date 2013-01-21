'use strict';

srchrApp.controller('SearchBarCtrl', function($scope) {

	// DEFAULT SEARCH SERVICE TO TWITTER
	$scope.search = {
		query: '',
		service: 'twitter'	
	}; 

	// HANDLE THE USER DOING A SEARCH
	$scope.performSearch = function() {

		// LET THE MAIN CONTROLLER KNOW THERE'S A NEW SEARCH TO BE DISPATCHED
		$scope.$emit('search', {
			query: $scope.search.query,
			service: $scope.search.service,
			// THIS SEARCH IS NOT COMING FROM HISTORY
			isNew: true
		});
	}
});
