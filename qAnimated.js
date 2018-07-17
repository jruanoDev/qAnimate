(function($) {
    // ANIMATED SLIDER
    function animatedSlider(listClass, focusedClass, disabledClass, videoControl, videoClass, leftCtrl, rightCtrl, controlsInside) {
        return {
            animate: function() {
                let listElements = $(listClass + " > li").get();
                let counter = 0;

                $(listElements[0]).addClass(focusedClass);
                if(controlsInside)
                    $(listElements[0]).find(rightCtrl).addClass(disabledClass);
                else
                    $(rightCtrl).addClass(disabledClass);


                $(leftCtrl).on('click', function() {
                    counter++;

                    let previousElement = $(listElements[counter - 1]);
                    let nextElement = $(listElements[counter]);

                    previousElement.removeClass(focusedClass);

                    if(videoControl) {
                        previousElement.find(videoClass)[0].pause();
                        nextElement.find(videoClass)[0].play();
                    }

                    nextElement.addClass(focusedClass);

                    let scrollValue = nextElement.outerWidth(true);

                    $(listClass).animate({
                        scrollLeft: scrollValue
                    }, 1000, function() {
                        if(counter + 1 >= listElements.length) {
                            $(leftCtrl).addClass(disabledClass);
                            $(rightCtrl).removeClass(disabledClass);
                        } else {
                            $(leftCtrl).removeClass(disabledClass);
                        }
                    });
                });

                $(rightCtrl).on('click', function() {
                    counter--;

                    let previousElement = $(listElements[counter + 1]);
                    let nextElement = $(listElements[counter]);

                    previousElement.removeClass(focusedClass);

                    if(videoControl) {
                        previousElement.find(videoClass)[0].pause();
                        nextElement.find(videoClass)[0].play();
                    }

                    nextElement.addClass(focusedClass);

                    let scrollValue = nextElement.outerWidth(true);

                    $(listClass).animate({
                        scrollLeft: -scrollValue
                    }, 1000, function() {
                        if(counter <= 0) {
                            $(rightCtrl).addClass(disabledClass);
                            $(leftCtrl).removeClass(disabledClass);
                        } else {
                            $(rightCtrl).removeClass(disabledClass);
                        }
                    });
                });
            }
        }
    }


});