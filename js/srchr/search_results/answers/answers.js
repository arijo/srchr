define(['jquery',
        'knockout',

        'js/srchr/models/answers',

        'text!js/srchr/search_results/answers/views/answers.tmpl'],

        function($, ko, Answers, answersTmpl) {

            var AnswersSearchResultsViewModel = function(options) {

                var self = this;

                // KEEP A REFERENCE TO THE VIEW'S ROOT ELEMENT
                this.element = options.element;

                this.element.html(answersTmpl);

                this.searchResults = ko.observableArray([]);

                // EXECUTE YQL SEARCH
                this.search = function(query) {

                    Answers.search(query, this.resultsLoaded);
                };

                // RENDER THE YQL SEARCH RESULTS VIEW
                this.resultsLoaded = function(results) {

                   self.searchResults(results);
                };
            };
    
            return AnswersSearchResultsViewModel;
});
