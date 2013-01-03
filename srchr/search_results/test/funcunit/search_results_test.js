steal("funcunit", function(){
	module("search_results test", { 
		setup: function(){
			S.open("//search_results/search_results.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})