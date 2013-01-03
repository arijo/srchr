// load('tabs/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("tabs/tabs.html","tabs/out")
});
