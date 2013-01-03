// load('srchr/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("srchr/srchr.html","srchr/out")
});
