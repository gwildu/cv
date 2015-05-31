/**
 * Created by marius on 25.05.2015.
 */
(function(){

    var niceScroll = {

        name: 'niceScroll',

        immediate: function(){
            window.gwc.register(this);
        },

        bind: function(){
            $('html').niceScroll();
        },

        setup: function(){
        }

    }

    niceScroll.immediate();

})(jQuery);