Ext.define('Srchr.store.Searches', {
	
	extend: 'Ext.data.Store',

	proxy: {
		type: 'localstorage',
		id: 'searches'
	}
});
