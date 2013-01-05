define(['jquery',
        'underscore',
       	'backbone'
	], 

	function( $, _, Backbone) {

		var Answers = Backbone.Model.extend({

			search: function(params, success, error) {
			
				var urlRoot = 'http://query.yahooapis.com/v1/public/yql';

				var yql = 'select * from answers.search where query="' + params.query + '"';
			        yql = yql + ' and type="resolved"';

				this.fetch({
					url: urlRoot + '?q=' + encodeURIComponent(yql) + '&format=json',
					type: 'get',
					dataType: 'jsonp',
					success: function(model, response, options) {
						var instances = [], 
						    query = response && response.query,
						    results = query && query.results,
						    question = results && results.Question,
						    len = question && question.length;
						if(question && len) {
							for(var i=0; i<len; i++) {
								var q = question[i];
								instances.push( new Answers(q));
							}
						}
						success(instances);
					},
					error: function() {
						error(arguments);
					}
				});
			}
		});

		return Answers;
	});
