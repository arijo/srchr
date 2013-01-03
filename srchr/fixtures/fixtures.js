// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("search", 5, function(i, search){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "search "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})