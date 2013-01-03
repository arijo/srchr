// load('search_results/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("search_results/search_results.html","search_results/out")
});
