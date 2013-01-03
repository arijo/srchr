steal("funcunit", function(){
	module("tabs test", { 
		setup: function(){
			S.open("//tabs/tabs.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})