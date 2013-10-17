define(['jquery',
        'knockout',

        'js/srchr/models/twitter',

        'text!js/srchr/search_results/twitter/views/twitter.tmpl'],

        function($, ko, Twitter, twitterTmpl) {

            var TwitterSearchResultsViewModel = function(options) {

                var self = this;

                // KEEP A REFERENCE TO THE VIEW'S ROOT ELEMENT
                this.element = options.element;

                this.element.html(twitterTmpl);

                this.searchResults = ko.observableArray([]);

                // EXECUTE TWITTER SEARCH
                this.search = function(query) {

                    Twitter.search(query, this.resultsLoaded);
                };

                // RENDER THE TWITTER SEARCH RESULTS VIEW
                this.resultsLoaded = function(results) {

                   self.searchResults(results);
                };
            };
    
            return TwitterSearchResultsViewModel;
});
