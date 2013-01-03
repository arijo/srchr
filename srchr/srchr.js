steal(
	'jquery/controller',
	'jquery/view/ejs',
	'jquery/controller/view',

	'./models/models.js',	
	'./fixtures/fixtures.js'
)	
.then(
	'srchr/searchbar',
	'srchr/history',
	'srchr/tabs',
	'srchr/search_results'
)
.then(
	'//srchr/views/layout.ejs',
	'//srchr/search_results/views/twitter.ejs',
	'//srchr/search_results/views/answers.ejs'
)
.then(
	'steal/less'
)
.then(
       	'./srchr.less',

	function(){	
		
		$.Controller('Srchr.Application', {
		},
		{
			init: function() {
			
				// SETUP THE INITIAL LAYOUT
				this.element.html('//srchr/views/layout.ejs', {});

				// SETUP THE SEARCHBAR CONTROLLER
				this.find('.search_bar').srchr_search_bar();

				// SETUP THE HISTORY CONTROLLER
				this.find('.history').srchr_history({
					searches: new Srchr.Models.Search.List()				   
				});

				// SETUP THE TABS CONTROLLER
				this.find('.tabs_wrapper').srchr_tabs();

				// SETUP THE TWITTER SEARCH RESULTS CONTROLLER
				$('#twitter_panel').srchr_search_results({
					model: Srchr.Models.Twitter,
					view: '//srchr/search_results/views/twitter.ejs'
				});

				// SETUP THE ANSWERS SEARCH RESULTS CONTROLLER
				$('#answers_panel').srchr_search_results({
					model: Srchr.Models.Answers,
					view: '//srchr/search_results/views/answers.ejs'
				});
			},

			'.search_bar search': function(el, ev, search) {

				this.find('.history')
					.controller()
					.addSearch(search)
				
				this.performSearch(search);
			},

			'.history search': function(el, ev, search) {
			
				this.performSearch(search);
			},

			performSearch: function(search) {
			
				var service = search && search.service,
				    tabId = '#'+service+'_panel';

				this.find('.srchr_tabs')
					.controller()
					.select(tabId);

				$(tabId).controller().search(search);
			}
		});

		$('#srchr_application').srchr_application();
	})
