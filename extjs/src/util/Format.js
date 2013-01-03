Ext.util.Format.capitalize = (function(){
	var re = /(^|[^\w])([a-z])/g,
	fn = function(m, a, b) {
		return a + b.toUpperCase();
	};
	return function(v){
		return v.toLowerCase().replace(re, fn);
	}
})();
