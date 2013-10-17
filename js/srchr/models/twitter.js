define(['jquery',
       'knockout'],

       function($, ko) {

           var Twitter = {

               urlRoot: '/node/search/tweets',
    
               search: function(query, callback) {

                   var url = this.urlRoot + '?q=' + encodeURIComponent(query); 

                   $.ajax({
                       url: url,
                       type: 'get',
                       dataType: 'json',
                       success: function(data) {
                           callback(data.statuses);
                       }
                   });
               }
           };

           return Twitter;
       });
