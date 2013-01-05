requirejs.config({
	baseUrl: '/',
	paths: {
		text: 'lib/require/plugins/text',
		jquery: 'lib/jquery-1.8.3',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone'
	}

});

requirejs(['jquery', 
	   'underscore',
	   'backbone',
	   'srchr/srchr'], function($, _, Backbone, Srchr) {

		new Srchr({ 
			el: $('#srchr_application')
		});
});
