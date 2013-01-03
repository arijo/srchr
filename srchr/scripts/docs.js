//js srchr/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('srchr/srchr.html', {
		markdown : ['srchr']
	});
});