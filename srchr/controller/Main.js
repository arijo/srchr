Ext.define('Srchr.controller.Main', {

	extend: 'Ext.app.Controller',

	requires: ['Ext.util.Format'],

	stores: ['Searches', 'TwitterSearchResults', 'AnswersSearchResults'],

	models: ['Search', 'TwitterSearchResult', 'AnswersSearchResult'],

	views: [
		'SearchBar',
		'History'
	],

	refs: [
		{ref: 'searchBar', selector: '#searchbar'},
		{ref: 'history', selector: '#history'},
		{ref: 'tabs', selector: '#tabs'},
		{ref: 'twitterSearchResults', selector: '#twittersearchresults'},
		{ref: 'answersSearchResults', selector: '#answerssearchresults'} 
	],

	init: function() {
	
		this.control({
			'searchbar': {
				search: this.search
			},
			'history': {
				search: this.search
			}
		});	
	},

	search: function(search) {

		var tabs = this.getTabs(),
		    tabName = search.service + 'SearchResults',
		    tab = this['get' + Ext.util.Format.capitalize(tabName)]();
		tab.search(search);
		tabs.setActiveTab(tab);

		if(search.isNew) {

			this.getHistory().addSearch(search);
		}
	}
});
