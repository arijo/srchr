steal(
	function(){	

		$.Controller('Srchr.Tabs', {
		},
		{
			init: function() {
			
				this.find('.panel').hide();

				this.select('#twitter_panel');	
			},

			'.tab a click': function(el, ev) {

				var tabId = el.attr('href');

				this.select(tabId);
			
				ev.preventDefault();

					
			},

			select: function(tabId) {
			
				var curTabEl = this.find('.current'),
				    curTabId = curTabEl.find('a').attr('href')
				    	.replace('http://'+window.location.hostname, ''),
				    curPanelEl = $(curTabId),
				    newTabEl = this.getTabEl(tabId),
				    newPanelEl = $(tabId);

				curTabEl.removeClass('current');
				curPanelEl.hide();	

				if(newTabEl) {

					newTabEl.addClass('current');
					newPanelEl.show();
				}
			},

			getTabEl: function(id) {
			
				var tabEls = this.find('.tab');

				for(var i=0; i<tabEls.length; i++) {

					var tabEl = $(tabEls[i]),
					    tabId = tabEl.find('a').attr('href');

					if(tabId === id) return tabEl;	       
				}
			}
		});
		
	})
