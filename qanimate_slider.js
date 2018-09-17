let sliderDefaults = {
    focusedClass: null,
    disabledClass: null,
    leftCtrl: null,
    rightCtrl: null,
    controlsInside:null
};

$.fn.makeSlider = function(options) {
    settings = $.extend({}, sliderDefaults, options || {});

    return this.each(function() {
        let listClass = $(this),
            listElements = listClass.children("li").get(),
            counter = 0,
            scrollValue = 0;

        $(listElements[0]).addClass(settings.focusedClass);

        if(settings.controlsInside)
            $(listElements[0]).find(settings.rightCtrl).addClass(settings.disabledClass);
        else
            $(settings.rightCtrl).addClass(settings.disabledClass);


        $(settings.leftCtrl).on('click', function() {
            counter++;

            let previousElement = $(listElements[counter - 1]),
                nextElement = $(listElements[counter]);

            previousElement.removeClass(settings.focusedClass);
            nextElement.addClass(settings.focusedClass);

            scrollValue += $(listElements[0]).outerWidth(true);

            listClass.animate({
                scrollLeft: scrollValue
            }, 1000, function() {
                if(counter + 1 >= listElements.length) {
                    $(settings.leftCtrl).addClass(settings.disabledClass);
                    $(settings.rightCtrl).removeClass(settings.disabledClass);
                } else {
                    $(settings.leftCtrl).removeClass(settings.disabledClass);
                    $(settings.rightCtrl).removeClass(settings.disabledClass);
                }
            });
        });

        $(settings.rightCtrl).on('click', function() {
            counter--;

            let previousElement = $(listElements[counter + 1]),
                nextElement = $(listElements[counter]);

            previousElement.removeClass(settings.focusedClass);
            nextElement.addClass(settings.focusedClass);

            scrollValue -= $(listElements[0]).outerWidth(true);

            listClass.animate({
                scrollLeft: scrollValue
            }, 1300, function() {
                if(counter <= 0) {
                    $(settings.rightCtrl).addClass(settings.disabledClass);
                    $(settings.leftCtrl).removeClass(settings.disabledClass);
                } else {
                    $(settings.rightCtrl).removeClass(settings.disabledClass);
                    $(settings.leftCtrl).removeClass(settings.disabledClass);
                }
            });
        });

        // Reset the slider
        $(window).on("beforeunload", function() {
            listClass.animate({
                scrollLeft: 0
            }, 200);
        });
    });
};