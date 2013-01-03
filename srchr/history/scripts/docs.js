//js history/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('history/history.html', {
		markdown : ['history']
	});
});