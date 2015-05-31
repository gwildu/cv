/**
 * Created by marius on 25.05.2015.
 */
( function ($, undefined) {

    "use strict";

    var gwc = {

        setup: [],
        bind: [],

        register: function (module) {

            if (typeof module.setup === 'function') {
                window.gwc.setup.push(module.setup);
            }

            if (typeof module.bind === 'function') {
                window.gwc.bind.push(module.bind);
            }

            window.gwc[module.name] = module;

        }
    };

    window.gwc = window.gwc || gwc;

    //window.gwc.module = function(context) {
    //    this.context = context;
    //    this.immediate = function() {
    //        window.gwc.register(this);
    //    }
    //}

})();