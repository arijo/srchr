steal("funcunit", function(){
	module("history test", { 
		setup: function(){
			S.open("//history/history.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})