steal("funcunit", function(){
	module("searchbar test", { 
		setup: function(){
			S.open("//searchbar/searchbar.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})