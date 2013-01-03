//js search_results/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('search_results/scripts/build.html',{to: 'search_results'});
});
