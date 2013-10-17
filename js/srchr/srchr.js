define(['jquery',
        'knockout',

        'js/srchr/search_bar/search_bar',
        'js/srchr/history/history',
        'js/srchr/search_results/twitter/twitter',
        'js/srchr/search_results/answers/answers',

        'js/srchr/tabs/tabs',

        'text!js/srchr/views/layout.tmpl'],

        function($, ko, 
                 
                 SearchBarViewModel, 
                 HistoryViewModel,
                 TwitterSearchResultsViewModel,
                 AnswersSearchResultsViewModel,

                 TabsViewModel,
                 
                 layoutTmpl) {

                    var SrchrViewModel = function(options) {

                        // KEEP A REFERENCE TO THE VIEW'S ROOT ELEMENT
                        this.element = options.element;

                        // RENDER THE APPLICATION LAYOUT
                        this.element.html(layoutTmpl);

                        // KEEP A REFERENCE TO SHARED STATE
                        this.clientState = {
                            search: ko.observable({})
                        };

                        // SETUP THE SEARCH BAR VIEW MODEL
                        var searchBarEl = this.element.find('.search_bar'),
                            searchBar = new SearchBarViewModel({
                                element: searchBarEl,
                                clientState: this.clientState
                            });
                        ko.applyBindings(searchBar, searchBarEl[0]);

                        // SETUP THE HISTORY VIEW MODEL
                        var historyEl = this.element.find('.history'),
                            history = new HistoryViewModel({
                                element: historyEl,
                                clientState: this.clientState
                            });
                        ko.applyBindings(history, historyEl[0]);

                        // SETUP THE TWITTER SEARCH RESULTS VIEW MODEL
                        var twitterSearchResultsEl = this.element.find('.twitter .search_results'),
                            twitterSearchResults = new TwitterSearchResultsViewModel({
                                element: twitterSearchResultsEl,
                                clientState: this.clientState
                            });
                        ko.applyBindings(twitterSearchResults, twitterSearchResultsEl[0]);

                        // SETUP THE ANSWERS SEARCH RESULTS VIEW MODEL
                        var answersSearchResultsEl = this.element.find('.answers .search_results'),
                            answersSearchResults = new AnswersSearchResultsViewModel({
                                element: answersSearchResultsEl,
                                clientState: this.clientState
                            });
                        ko.applyBindings(answersSearchResults, answersSearchResultsEl[0]);

                        // SETUP THE TABS VIEW MODEL
                        var tabsContainerEl = this.element.find('.tabs_container'),
                            tabs = new TabsViewModel({
                                element: tabsContainerEl
                            });
                        ko.applyBindings(tabs, tabsContainerEl[0]);

                        // LISTEN TO USER SUBMITTING A NEW SEARCH
                        this.clientState.search.subscribe(function(search) {

                            if(search.isNew)  {

                                history.addSearch(search);
                            }

                            if(search.service == 'twitter') {

                                tabs.showTwitterPanel();
                                twitterSearchResults.search(search.query);

                            } else {

                                tabs.showAnswersPanel();
                                answersSearchResults.search(search.query);
                            }
                        });
                    };

                    return SrchrViewModel;
                 });
