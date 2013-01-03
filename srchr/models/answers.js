steal('jquery/model', function(){

	$.Model('Srchr.Models.Answers',
	{
		search: function(params, success, error) {

			var yql = 'select * from answers.search where query="' + params.query + '"';
			yql = yql + ' and type="resolved"';
			
			$.ajax({
				url: 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(yql) + '&format=json',
				type: 'get',
				dataType: 'jsonp',
				data: {},
				success: this.proxy(['searchSuccessful', success]),
				error: error
			});
		},

		searchSuccessful: function(data) {
		
			var instances = [], 
			    query = data && data.query,
			    results = query && query.results,
			    question = results && results.Question,
			    len = question && question.length;

			if(question && len) {

				for(var i=0; i<len; i++) {

					var q = question[i];
					instances.push( new this(q));
				}
			}

			return [instances];
		}
	},
	{
	});
})
