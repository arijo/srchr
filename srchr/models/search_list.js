define(['jquery', 'underscore', 'backbone', 
        'lib/backbone.localStorage'], 

       function($, _, Backbone) {

		var SearchList = Backbone.Collection.extend({

			localStorage: new Backbone.LocalStorage('searches')

		});

		return SearchList;
	});
