define(['jquery',
       'knockout'],

       function($, ko) {

           var Answers = {

               urlRoot: 'http://query.yahooapis.com/v1/public/yql',

               search: function(query, callback) {

                   var yql = 'select * from answers.search where query="' + query + '"';
                       yql = yql + ' and type="resolved"';

                   var url = this.urlRoot + '?q=' + encodeURIComponent(yql) + '&format=json';

                   $.ajax({
                       url: url,
                       type: 'get',
                       dataType: 'jsonp',
                       success: function(data) {

                           var query = data && data.query,
                               results = query && query.results,
                               Question = results && results.Question || [];
                           
                           callback(Question);
                       }
                   });
               }
           };

           return Answers;
       });
