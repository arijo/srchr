define(['jquery',
        'knockout'],

        function($, ko) {

            var TabsViewModel = function(options) {

                this.twitterVisible = ko.observable(true);
                this.answersVisible = ko.observable(false);

                this.showTwitterPanel = function() {

                    this.twitterVisible(true);
                    this.answersVisible(false);
                };

                this.showAnswersPanel = function() {

                    this.twitterVisible(false);
                    this.answersVisible(true);
                };
            };
    
            return TabsViewModel;
});
