requirejs.config({
    paths: {
        'text': 'lib/text',
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery',
        'underscore': 'lib/underscore',
        'knockout': 'lib/knockout'
    },
    shim: {
        'knockout': {
            deps: [],
            exports: 'ko'
        }
    }
});

require(['jquery', 'knockout', 'js/srchr/srchr'], function($, ko, SrchrViewModel) {

    // ALLOW FOR NESTED VIEW MODELS
    ko.bindingHandlers.stopBinding = {
        
        init: function() {

            return { controlsDescendantBindings: true }
        }

    };
    ko.virtualElements.allowedBindings.stopBinding = true;

    // BOOTSTRAP THE APPLICATION
    var srchrEl = $('#srchr');
    ko.applyBindings(new SrchrViewModel({
        element: srchrEl
    }), srchrEl[0]);
});
