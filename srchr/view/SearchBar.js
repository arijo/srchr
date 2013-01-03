Ext.define('Srchr.view.SearchBar', {
	extend: 'Ext.form.Panel',
	alias: 'widget.searchbar',
	layout: 'hbox',
	cls: 'srchr-searchbar',
	border: false,
	initComponent: function() {
	
		this.items = [{
			xtype: 'textfield',
			name: 'query',
			fieldLabel: 'Query',
			labelWidth: 40,
			padding: '0 5 0 0',
		},{
			xtype: 'button',
			text: 'Search',
			listeners: {
				scope: this,
				click: this.search
			}
		},{
			xtype: 'radiofield',
			id: 'twitter',
			name: 'service',
			inputValue: 'twitter',
			fieldLabel: 'Twitter',
			labelWidth: 40,
			padding: '0 5 0 25',
			listeners: {
				beforeRender: function(field, options) {
					field.setValue(true);
				}
			}
		},{
			xtype: 'radiofield',
			id: 'answers',
			name: 'service',
			inputValue: 'answers',
			fieldLabel: 'Answers',
			labelWidth: 50,
			padding: '0 10 0 5'
		}];

		this.callParent(arguments);	
	},

	search: function() {
	
		var form = this.getForm(),
		    input = form && form.findField('query'),
		    twitter = form && form.findField('twitter'),
		    answers = form && form.findField('answers');

		if(input) {

			if(twitter.getValue()) {

				this.fireEvent('search', {
					query: input.getValue(),
					service: 'twitter',
					isNew: true
				});

			} else if(answers.getValue()) {

				this.fireEvent('search', {
					query: input.getValue(),
					service: 'answers',
					isNew: true
				});

			} else {

				console.log('Bad search terms');
			}
		}
	}
});
