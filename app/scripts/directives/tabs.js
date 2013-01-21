'use strict';

srchrApp.directive('tabs', function() {
	return {
		restrict: 'E',
		scope: {
			curTab: '@'
		},
		compile: function(cElem, cAttrs) {
			
			var ulChildren = cElem.find('ul').children(),
			    children = cElem.children(),
			    // HELPER FUNCTION TO FILTER ELEMENTS BY CLASSNAME 
			    // (BECAUSE jqLITE DOES NOT IMPLEMENT FILTER BY CLASSNAME)
			    filterByClassName = function(els, className) {
				var result = [];
				angular.forEach(els, function(el, i) {
					if(angular.element(el).hasClass(className)) {
						result.push(el);
					}
				});
				return result.length == 1 ? result[0] : result;
			    },
			    // GET THE TAB (LI) ELEMENTS
			    tabEls = filterByClassName(ulChildren, 'tab'),
			    // GET THE PANEL ELEMENTS
			    panelEls = filterByClassName(children, 'panel');

			// FOR EACH TAB (LI ELEMENT) DO ...
			angular.forEach(tabEls, function(tabEl, i) {

				var $tabEl = angular.element(tabEl),
				    tabId = $tabEl.attr('data-tab-id'),
				    $panelEl = angular.element(filterByClassName(panelEls, tabId));

				    // ... INSTRUMENT IT WITH CLICK HANDLERS THAT SET curTab TO ITS tabId ...
				    $tabEl.attr('ng-click', 'curTab=\'' + tabId + '\'');
				    // ... INSTRUMENT IT SO IT HAS current CLASSNAME WHEN SELECTED ...
				    $tabEl.attr('ng-class', '{current: curTab==\'' + tabId + '\'}');

				    // ... INSTRUMENT ITS PANEL SO THAT IT SHOWS WHEN curTab EQUALS ITS tabId ...
				    $panelEl.attr('ng-show', 'curTab==\'' + tabId + '\'');
				    // ... INSTRUMENT ITS PANEL SO THAT IT HIDES WHEN curTab IS NOT ITS tabId
				    $panelEl.attr('ng-hide', 'curTab!=\'' + tabId + '\'');
			});

			angular.element(cElem).addClass('tabs-wrap');

			return function link(scope, lElem, lAttrs) {

				// USE THE DIRECTIVE's cur-tab ATTRIBUTE TO DECIDE 
				// WHICH TAB TO ACTIVATE WHEN THE APPLICATION LOADS
				scope.curTab = lAttrs.curTab;
			};
		}
	};
});
