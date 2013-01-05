define(['jquery',
        'underscore',
       	'backbone'
	], 

	function( $, _, Backbone) {

		var Twitter = Backbone.Model.extend({

			search: function(params, success, error) {
			
				var urlRoot = 'http://search.twitter.com/search.json';

				this.fetch({
					url: urlRoot + '?q=' + encodeURIComponent(params.query),
					type: 'get',
					dataType: 'jsonp',
					success: function(model, response, options) {
						var results = response && response.results || [],
						    instances = [];
						for(var i=0;i<results.length;i++) {
							var r = results[i];
							instances.push( new Twitter(r));
						}
						success(instances);
					},
					error: function() {
						error(arguments);
					}
				});
			}
		});

		return Twitter;
	});
