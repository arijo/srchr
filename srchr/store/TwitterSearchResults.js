Ext.define('Srchr.store.TwitterSearchResults', {
	
	extend: 'Ext.data.Store',

	model: 'Srchr.model.TwitterSearchResult',

	proxy: {
		type: 'jsonp',
		url: 'http://search.twitter.com/search.json',
		reader: {
			type: 'json',
			root: 'results'
		}
	}
});
