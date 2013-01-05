define(['jquery',
        'underscore',
       	'backbone',
	'text!srchr/history/templates/history.tp'
	], 

	function( $, _, Backbone, historyTp) {

		var History = Backbone.View.extend({

			events: {
				'click .remove': 'removeSearch',
				'click': 'selectSearch',
				'mouseleave .search': 'mouseleave',
				'mouseenter .search': 'mouseenter'
			},

			initialize: function() {

				this.options.searches.fetch();
			
				this.$el.html(_.template(historyTp, {
					searches: this.options.searches.models
				}));

				this.options.searches.on('add',
					$.proxy(this.searchAdded, this));

				this.options.searches.on('remove',
					$.proxy(this.searchRemoved, this));
			},

			addSearch: function(search) {

				search.id = +new Date();
				this.options.searches.create(search);
			},

			selectSearch: function(ev) {
			
				this.$el.trigger('search', this._getSearch(ev).attributes);
			},

			removeSearch: function(ev) {

				ev.stopPropagation();
			
				this._getSearch(ev).destroy();
			},

			searchAdded: function(search, searches) {
			
				this.show(searches.models);
			},

			searchRemoved: function(search, searches) {
			
				this.show(searches.models);
			},

			show: function(searches) {
			
				this.$el.html(_.template(historyTp, {
					searches: searches 
				}));		
			},

			mouseleave: function(ev) {
			
				this._getSearchEl(ev).removeClass('hover');	
			},
			
			mouseenter: function(ev) {
			
				this._getSearchEl(ev).addClass('hover');	
			},


			_getSearch: function(ev) {
			
				var searchEl = this._getSearchEl(ev),
				    id = searchEl.attr('data-id');

				return this.options.searches.get(id);
			},

			_getSearchEl: function(ev) {
			
				var target = $(ev.target);

			        return target.closest('.search');
			}
		});

		return History;
	});
