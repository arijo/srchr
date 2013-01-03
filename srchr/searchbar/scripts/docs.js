//js searchbar/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('searchbar/searchbar.html', {
		markdown : ['searchbar']
	});
});