//js tabs/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('tabs/tabs.html', {
		markdown : ['tabs']
	});
});