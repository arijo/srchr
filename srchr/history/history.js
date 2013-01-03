steal(
	'//srchr/history/views/history.ejs',

	function(){
		
		$.Controller('Srchr.History', {
		},
		{
			init: function() {
			
				this.element.html(
					'//srchr/history/views/history.ejs', {
						searches: this.options.searches.retrieve('searches')
				});
			},

			'.search click': function(el, ev) {
			
				var search = el.model();
				
				this.element.trigger('search', search);	
			},

			addSearch: function(search) {
			
				search.id = +new Date();

				steal.dev.log(search.id);

				this.options.searches.push(
					new Srchr.Models.Search(search)
				);

				this.options.searches.store('searches');
			},

			'{searches} add': function(searches, ev, delta) {
			
				this.element.html(
					'//srchr/history/views/history.ejs', {
						searches: searches
				});	
			},

			'.remove click': function(el, ev) {

				ev.stopPropagation();
			
				var search = el.closest('.search').model();

				this.options.searches.remove(search.id);

				this.options.searches.store('searches');
			},

			'{searches} remove': function(searches, ev) {
			
				this.element.html(
					'//srchr/history/views/history.ejs', {
						searches: searches
				});	
			},

			'.search mouseenter': function(el, ev) {
			
				el.addClass('hover');	
			},

			'.search mouseleave': function(el, ev) {
			
				el.removeClass('hover');	
			}
		});
	})
