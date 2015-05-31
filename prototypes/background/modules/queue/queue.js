/**
 * Created by marius on 27.05.2015.
 */
/**
 * Created by marius on 26.05.2015.
 */
(function(){

    var queue = {

        name: 'queue',

        Queue: function Queue (slots, initialValues) {
            this.internalQueue = [];
            this.tempQueue = [];
            for (var i = 0; i < slots; i++) {
                this.internalQueue[i] = typeof initialValues[i] === 'undefined' ? false : initialValues[i];
            };
            this.add = function (value){
                var result = this.lossFullRotate();
                this.internalQueue[0] = value;
                return result;
            };
            this.lossFullRotate = function() {
                var result = this.internalQueue[this.internalQueue.length];
                for (var i = 1; i < this.internalQueue.length; i++) {
                    this.tempQueue[i] = this.internalQueue[(i-1)];
                    this.internalQueue = this.tempQueue;
                }
                return result;
            };
            this.toArray = function(){
                return this.internalQueue;
            };
            this.length = this.internalQueue.length;
        },

        immediate: function(){
            window.gwc.register(this);
        },

        bind: function(){
            var $words = $('.gwc-code-cloud'),
                lastWords = new this.Queue();

            setInterval($.proxy(function(){
                var $removedWord = lastWords.add($($words[Math.floor(Math.random() * $words.length)])),
                    $currentWords = lastWords.toArray();

                $removedWord.removeClass('active');

                for ( var i = 0; i < $currentWords.length; i++) {
                    $currentWords[i].addClass('active');
                }

            }, this), 200);
        }

    }

    bgAnimation.immediate();

})(jQuery);