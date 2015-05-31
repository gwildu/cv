/**
 * Created by marius on 26.05.2015.
 */
(function(){

    var bgAnimation = {

        name: 'bgAnimation',
        internalQueue: [],
        tempQueue: [],

        immediate: function(){
            window.gwc.register(this);
        },

        bind: function(){
            var $words = $('.gwc-code-cloud'),
                $lastWord = false;

            setInterval($.proxy(function(){
                if($lastWord) {
                    $lastWord.removeClass('active');
                }
                $lastWord = $($words[Math.floor(Math.random() * $words.length)]);
                $lastWord.addClass('active');

            }, this), 500);
        },

        initQueue: function(slots, initialValues) {
            for (var i = 0; i < slots; i++) {
                this.internalQueue[i] = typeof initialValues[i] === 'undefined' ? false : initialValues[i];
            };
        },

        lossFullRotate: function() {
            var result = this.internalQueue[this.internalQueue.length];
            for (var i = 1; i < this.internalQueue.length; i++) {
                this.tempQueue[i] = this.internalQueue[(i-1)];
                this.internalQueue = this.tempQueue;
            }
            return result;
        },

        addToQueue: function(value) {
            var result = this.lossFullRotate();
            this.internalQueue[0] = value;
            return result;
        }

    }

    bgAnimation.immediate();

})(jQuery);