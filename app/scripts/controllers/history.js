'use strict';

srchrApp.controller('HistoryCtrl', function($scope, searchStore) {

	// GET THE SEARCH LOCAL STORAGE SERVICE
	var searches = $scope.searches = searchStore.get();

	// LISTEN FOR SEARCH EVENTS
	$scope.$on('search', function(ev, search) {

		// IS THIS COMING FROM SEARCH BAR?
		if(search.isNew) {

			// IF SO THEN UPDATE HISTORY'S SEARCH LIST ...
			searches.push(search);

			// ... AND UPDATE LOCAL STORAGE
			searchStore.put(searches);
		}
	});

	$scope.select = function(search) {

		search.isNew = false;

		$scope.$emit('search', search);	
	}

	// HANDLE THE USER REMOVING A SEARCH
	$scope.remove = function(search) {

		// REMOVE THE SEARCH FROM HISTORY'S SEARCH LIST ...
		searches.splice(searches.indexOf(search), 1);

		// ... AND UPDATE LOCAL STORAGE
		searchStore.put(searches);
	}
});
