define(['jquery',
        'underscore',
       	'backbone',

	'srchr/models/search_list',
	'srchr/models/twitter',
	'srchr/models/answers',

	'srchr/search_bar/search_bar',
	'srchr/history/history',
	'srchr/tabs/tabs',
	'srchr/search_results/search_results',
	
	'text!srchr/templates/layout.tp',
	'text!srchr/search_results/templates/twitter.tp',
	'text!srchr/search_results/templates/answers.tp'
	], 

	function( $, _, Backbone,

		  SearchList,
		  Twitter,
		  Answers,

		  SearchBar,
		  History,
		  Tabs,
		  SearchResults,

		  layoutTp,
		  twitterTp,
		  answersTp
	) {

			var Srchr = Backbone.View.extend({

				events: {
					'search .search_bar': 'newSearch',
					'search .history': 'historySearch'
				},

				initialize: function() {
				
					this.$el.html(_.template(layoutTp, {}));

					this.searchBar = new SearchBar({
						el: this.$el.find('.search_bar')
					});

					this.tabs = new Tabs({
						el: this.$el.find('.tabs_wrapper')
					});

					this.history = new History({
						el: this.$el.find('.history'),
						searches: new SearchList()
					});

					this.twitterSearchResults = new SearchResults({
						el: $('#twitter_panel'),
					        model: new Twitter,
					        template: twitterTp	
					});

					this.answersSearchResults = new SearchResults({
						el: $('#answers_panel'),
					        model: new Answers,
					        template: answersTp	
					});
				},

				newSearch: function(ev, search) {
				
					this.history.addSearch(search);	

					this.performSearch(search);
				},

				historySearch: function(ev, search) {
				
					this.performSearch(search);
				},

				performSearch: function(search) {

					var service = search && search.service,	
					    tabId = '#'+service+'_panel',
					    viewId = service + 'SearchResults',
					    view = this[viewId];
					  
					if(view) {

						this.tabs.select(tabId);
						view.search(search);	
					}
				}
			});

			return Srchr;
	});
