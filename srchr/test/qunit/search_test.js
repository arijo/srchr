steal("funcunit/qunit", "srchr/fixtures", "srchr/models/search.js", function(){
	module("Model: Srchr.Models.Search")
	
	test("findAll", function(){
		expect(4);
		stop();
		Srchr.Models.Search.findAll({}, function(searches){
			ok(searches)
	        ok(searches.length)
	        ok(searches[0].name)
	        ok(searches[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Srchr.Models.Search({name: "dry cleaning", description: "take to street corner"}).save(function(search){
			ok(search);
	        ok(search.id);
	        equals(search.name,"dry cleaning")
	        search.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Srchr.Models.Search({name: "cook dinner", description: "chicken"}).
	            save(function(search){
	            	equals(search.description,"chicken");
	        		search.update({description: "steak"},function(search){
	        			equals(search.description,"steak");
	        			search.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Srchr.Models.Search({name: "mow grass", description: "use riding mower"}).
	            destroy(function(search){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})