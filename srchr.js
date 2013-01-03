Ext.application({
	name: 'Srchr',
	appFolder: 'srchr',

	controllers: [
		'Main'
	],

	launch: function() {

		Ext.create('Srchr.view.Viewport' ,{});
	}
});
