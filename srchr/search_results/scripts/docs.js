//js search_results/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('search_results/search_results.html', {
		markdown : ['search_results']
	});
});