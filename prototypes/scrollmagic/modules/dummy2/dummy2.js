/**
 * Created by marius on 25.05.2015.
 */
(function(){

    var dummy2 = {

        name: 'dummy2',

        immediate: function(){
            window.gwc.register(this);
        },

        bind: function(){
        },

        setup: function(){
        }

    }

    dummy2.immediate();

})(jQuery);