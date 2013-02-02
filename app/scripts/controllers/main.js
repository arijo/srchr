'use strict';

srchrApp.controller('MainCtrl', function($scope) {

	// TABS DEFAULT PANEL IS TWITTER SEARCH RESULTS
	$scope.curTab = 'twitter';

	// LISTEN FOR SEARCH EVENTS
	$scope.$on('search', function(ev, search) {

		// PREVENT INFINITE LOOP ON BROADCAST
		if(ev.targetScope == $scope) return;

		// LET HISTORY AND SEARCH RESULTS CONTROLLERS
		// KNOW THERE'S A NEW SEARCH TO BE DISPATCHED
		$scope.$broadcast('search', search);

		// SHOW THE TABS PANEL THAT MATCHES THE SEARCH SERVICE
		$scope.curTab = search.service;
	});
});
