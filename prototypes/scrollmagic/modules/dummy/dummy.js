/**
 * Created by marius on 25.05.2015.
 */

(function($, undefined){

    "use strict";


    var dummy =  {

        name: 'dummy',

        immediate: function(){
            window.gwc.register(this);
        },

        bind: function() {

            var scrollMagicController = new ScrollMagic.Controller(),
                numberOfSections = $('.timeline section').length,
                tweens = [],
                scenes = [];

            window.myowntweens = tweens;
            window.myownscenes = scenes;

            for (var i = 0; i < numberOfSections; i++ ) {
                tweens.push(
                    {
                        opening: TweenMax.to('#scene' + i.toString() + ' .expand', .5, {
                            height: '300px'
                        }),
                        closing: TweenMax.to('#scene' + i.toString() + ' .expand',.5, {
                            height: '0'
                        })
                    }

                );
                scenes.push(
                    {
                        opening: new ScrollMagic.Scene({
                            triggerElement: '#scene' + i.toString(),
                            offset: -150,
                            reverse: true
                        })
                            .setTween(tweens[i].opening)
                            .addTo(scrollMagicController),
                        closing: new ScrollMagic.Scene({
                            triggerElement: '#scene' + i.toString(),
                            offset: 300,
                            reverse: true
                        })
                            .setTween(tweens[i].closing)
                            .addTo(scrollMagicController)

                    }

                );
            }

        }

    };

    dummy.immediate();

})(jQuery);
