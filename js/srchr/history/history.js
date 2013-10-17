define(['jquery',
        'knockout',

        'text!js/srchr/history/views/history.tmpl'],

        function($, ko,
                
                 historyTmpl) {

            var HistoryViewModel = function(options) {

                var self = this;

                // KEEP A REFERENCE TO THE VIEW'S ROOT ELEMENT
                this.element = options.element;

                // RENDER THE HISTORY VIEW
                this.element.html(historyTmpl);

                // KEEP A REFERENCE TO THE CLIENT STATE
                this.clientState = options.clientState;

                // GET PREVIOUS SEARCHES FROM LOCAL STORAGE
                var json = localStorage.getItem('searches') || '[]',
                    searches = $.parseJSON(json);

                // BINDINGS: START
                this.searches = ko.observableArray(searches);

                // API
                this.addSearch = function(search) {

                    this.searches.push(search);
                
                    localStorage.setItem(
                        'searches',
                        ko.toJSON(this.searches())
                    );
                };
                
                this.remove = function(search) {

                    self.searches.remove(search);

                    localStorage.setItem(
                        'searches',
                        ko.toJSON(self.searches())
                    );
                };

                this.search = function(search) {

                    search.isNew = false;

                    self.clientState.search(search);
                }; 
            };

            return HistoryViewModel;
});


