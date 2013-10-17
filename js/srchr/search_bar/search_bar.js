define(['jquery',
        'knockout',

        'text!js/srchr/search_bar/views/search_bar.tmpl'],

        function($, ko, searchBarTmpl) {

            var SearchBarViewModel = function(options) {

                // KEEP A REFERENCE TO THE VIEW'S ROOT ELEMENT
                this.element = options.element;

                // KEEP A REFERENCE TO THE CLIENT STATE
                this.clientState = options.clientState;

                this.element.html(searchBarTmpl);

                // LOCAL BINDINGS
                this.query = ko.observable('');
                this.service = ko.observable('twitter');

                // UPDATE CLIENT STATE SO THAT PARENT
                // MODEL VIEW CAN HANDLE A NEW SEARCH
                this.search = function() {

                    this.clientState.search({
                        query: this.query(),
                        service: this.service(),
                        isNew: true
                    });
                };
            };

            return SearchBarViewModel;
});

