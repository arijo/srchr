Ext.define('Srchr.view.History', {
	extend: 'Ext.view.View',
	alias: 'widget.history',

	cls: 'srchr-history',
	overItemCls: 'hover',

	initComponent: 	function(){

		this.store = Ext.create('Srchr.store.Searches', {
			id: 'searchesStore',
			model: 'Srchr.model.Search',
			autoLoad: true
		});

		this.tpl = new Ext.XTemplate( '<tpl for=".">',
				'<div class="search">',
					'<div class="params"><span class="query">{query}</span>&nbsp;({service})</div>',		
					'<div class="close"><i class="icon-remove"></i></div>',
				'</div>',
			'</tpl>'
		);
		this.itemSelector = 'div.search';

		this.listeners = {
			itemclick: this.itemClicked
		};

		this.callParent(arguments);
	},

	itemClicked: function(view, search, el, idx, ev) {
	
		var target = ev.getTarget(),
		    className = target && target.className;

		if( className && /close/.test(className)) {

			return this.close(search);

		} 

		this.fireEvent('search', search.data);			
	},

	close: function(search) {

		this.store.remove(search);
		this.store.sync();
	},

	addSearch: function(searchParams) {
	
		this.store.add(new Srchr.model.Search(searchParams));
		this.store.sync();
	}
});

