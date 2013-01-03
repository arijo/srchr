steal(
	function(){
		
		$.Controller('Srchr.SearchResults', {
		},
		{
			search: function(search) {

				this.options.model.search(
					search, 
					this.proxy('searchComplete'),
					this.proxy('searchError')
				);
			},

			searchComplete: function(results) {
			
				this.element.html(this.options.view, {
					results: results 
				});
			},

			searchError: function(error) {
			
				steal.dev.log(error);
			}
		});
	})
