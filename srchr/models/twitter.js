steal('jquery/model', function(){

	$.Model('Srchr.Models.Twitter',
	{
		search: function(params, success, error) {

			$.ajax({
				url: 'http://search.twitter.com/search.json',
				type: 'get',
				dataType: 'jsonp',
				data: { q: params.query },
				success: this.proxy(['searchSuccessful', success]),
				error: error
			});
		},

		searchSuccessful: function(data) {

			var instances = [], 
			    results = data && data.results,
			    len = results && results.length;

			if(results && len) {

				for(var i=0; i<len; i++) {

					var r = results[i];
					instances.push( new this(r));
				}
			}

			return [instances];
		}
	},
	{
	});
})
