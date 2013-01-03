// load('searchbar/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("searchbar/searchbar.html","searchbar/out")
});
