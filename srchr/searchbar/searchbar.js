steal(
	'//srchr/searchbar/views/searchbar.ejs',

	function(){
		
		$.Controller('Srchr.SearchBar', {
		},
		{
			init: function() {
			
				this.element.html('//srchr/searchbar/views/searchbar.ejs', {});
			},

			'.search click': function(el, ev) {

				var twitterChecked = $('#twitter').attr('checked'),
				    answersChecked = $('#answers').attr('checked'),
				    query = $('#query').val();
			
				if(twitterChecked) {
				
					this.element.trigger('search', {
						query: query,
						service: 'twitter'
					});

				} else if(answersChecked) {

					this.element.trigger('search', {
						query: query,
						service: 'answers'
					});
				
				} else {

					steal.dev.warn('Invalid service');
				}
			}
		});
	})
