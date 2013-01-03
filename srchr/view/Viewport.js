Ext.define('Srchr.view.Viewport', {

	extend: 'Ext.Viewport',

	requires: [
		'Srchr.view.SearchBar',
		'Srchr.view.History',
		'Srchr.view.SearchResults'
	],

	initComponent: function() {
	
		this.layout = {
		       type: 'fit'
		};

		this.items = [{
			xtype: 'panel',
			cls: 'srchr',
			layout: {
				type: 'fit'
			},
			dockedItems: [
				this.createSearchBar(),
				this.createHistory()
			],
			items: [{
				id: 'tabs',
				cls: 'srchr-tabs',
				xtype: 'tabpanel',
				layout: {
					type: 'fit'	
				},	
				items: [
					this.createTwitterSearchResults(),
					this.createAnswersSearchResults()	
				]
			}]
		}];

		this.callParent(arguments);
	},

	createSearchBar: function() {
	
		this.searchBar = Ext.create('widget.searchbar', {
			id: 'searchbar',
			dock: 'top',
			height: 60
		});

		return this.searchBar;
	},

	createHistory: function() {
	
		this.history = Ext.create('widget.history', {
			id: 'history',
			dock: 'left',
			width: 320
		});

		return this.history;
	},

	createTwitterSearchResults: function() {

		this.twitterSearchResults = Ext.create('widget.searchresults', {
			id: 'twittersearchresults',
			store: Ext.create('Srchr.store.TwitterSearchResults', {}),
			tpl: new Ext.XTemplate(
				'<tpl for=".">',
				   	'<div class="search-result">',
						'<div class="avatar">',
							'<img src="{ profile_image_url }">',
						'</div>',
						'<div class="info">',
							'<div class="from_user">{ from_user }</div>',
							'<div class="text">{ text }</div>',
						'</div>',
					'</div>',
				'</tpl>'
			),
			title: 'Twitter Search Results',
			search: function(search) {

				this.store.getProxy().extraParams.q = search.query;
				this.store.load();
			}
		});

		return this.twitterSearchResults;
	},

	createAnswersSearchResults: function() {
	
		this.answersSearchResults = Ext.create('widget.searchresults', {
			id: 'answerssearchresults',
			store: Ext.create('Srchr.store.AnswersSearchResults', {}),
			tpl: new Ext.XTemplate(
				'<tpl for=".">',
				   	'<div class="search-result answer">',
						'<div class="info">',
							'<div class="text"><span class="question">Question:</span>{ Content }</div>',
							'<div class="text"><span class="answer">Answer:</span>{ ChosenAnswer }</div>',
						'</div>',
					'</div>',
				'</tpl>'
			),
			title: 'Answers Search Results',
			search: function(search) {

				var yql = 'select * from answers.search where query="' + search.query + '"';
				yql = yql + ' and type="resolved"';
				this.store.getProxy().extraParams.q = yql;
				this.store.getProxy().extraParams.format = 'json';
				this.store.load();
			}
		});

		return this.answersSearchResults;
	}
});
