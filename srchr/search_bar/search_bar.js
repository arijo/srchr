define(['jquery',
        'underscore',
       	'backbone',
	'text!srchr/search_bar/templates/search_bar.tp'
	], 

	function( $, _, Backbone, searchBarTp) {

		var SearchBar = Backbone.View.extend({

			events: {
				'click .search': 'search'
			},

			initialize: function() {
			
				this.$el.html(_.template(searchBarTp, {}));
			},

			search: function(ev) {
			
				var twitterChecked = $('#twitter').attr('checked'),
				    answersChecked = $('#answers').attr('checked'),
				    query = $('#query').val();
			
				if(twitterChecked) {
				
					this.$el.trigger('search', {
						query: query,
						service: 'twitter'
					});

				} else if(answersChecked) {

					this.$el.trigger('search', {
						query: query,
						service: 'answers'
					});
				
				} else {

					//console.log('Invalid service');
				}
			}
		});

		return SearchBar;
	});
