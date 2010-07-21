// jquery.mappify.js, version 0.0.1
// http://github.com/jansc/jquery-mappify
// Copyright (c) 2010 Jan Schreiber <jans@ravn.no>
// Licensed under the MIT-License.
(function($){  
    $.mappify = function (rdf, map, callback, options) {
        var defaults = {
            rdf: null,
            map: null,
            callback: function () {},
            // Nothing here yet
        };  
        var options = $.extend(defaults, options);  
        $.jsonp({
                dataType: 'jsonp',
                callbackParameter: "callback",
                data: $.param({
                        rdf: rdf,
                        map: map,
                        out: 'json'}),
                error: function (xOptions, textStatus) {
                    alert("error");
                    this; // the xOptions object
                },
                url: 'http://ws.mappify.org/rdf2tm/',
                success: callback,
            });
    };
})(jQuery);  

