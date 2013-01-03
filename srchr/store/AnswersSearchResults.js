Ext.define('Ext.data.reader.Answers', {
	extend: 'Ext.data.reader.Json',
	read: function(response) {
		return this.callParent([{root: response.query.count > 0 ? response.query.results.Question : []}]);	
	},
	root: 'root'
});

Ext.define('Srchr.store.AnswersSearchResults', {
	
	extend: 'Ext.data.Store',

	model: 'Srchr.model.AnswersSearchResult',

	proxy: {
		type: 'jsonp',
		url: 'http://query.yahooapis.com/v1/public/yql',
		reader: Ext.create('Ext.data.reader.Answers', {})	
	}
});
