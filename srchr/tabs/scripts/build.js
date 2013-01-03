//js tabs/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('tabs/scripts/build.html',{to: 'tabs'});
});
