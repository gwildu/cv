/**
 * Created by marius on 25.05.2015.
 */
(function($, undefined) {

    "use strict";

    var gwc = {

        runSetup: function () {
            if ( typeof window.gwc.setup !== 'undefined' ){
                for ( var i = 0; i < window.gwc.setup.length; i++ ) {
                    window.gwc.setup[i]();
                }
            }
        },

        runBind: function () {
            if (typeof window.gwc.bind !== 'undefined') {
                for (var i = 0; i < window.gwc.bind.length; i++) {
                    window.gwc.bind[i]();
                }
            }
        },

        consoleify: function() {
            window.console = window.console || {
                log: function() {
                    // do no harm
                }
            };
        },

        init: function () {

            this.consoleify();

            this.runSetup();

            $(document).ready(this.runBind);
        }

    };

    $.extend(window.gwc, gwc);

    window.gwc.init();

})(jQuery);