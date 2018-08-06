(function ($) {
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

    let menuDefaults = {
        animClass: null,
        menuSelector: null,
        closeSelector: null
    };

    $.fn.makeMenu = function(options) {
        menuSettings = $.extend({}, menuDefaults, options || {});
        let abierto = false;

        return this.each(function() {
            let menuButton = $(this),
                buttonClass = $(this).attr("class"),
                closeSelector = menuSettings.closeSelector,
                menuSelector = menuSettings.menuSelector,
                animClass = menuSettings.animClass,
                menuItems = $(menuSelector + " ul li").get();

            menuButton.on('click', function() {
               if(abierto) {
                   menuButton.removeClass(closeSelector).addClass(buttonClass);

                   $(menuItems).fadeOutWithAnim(100, animClass, function() {
                       $(menuSelector).fadeOut(450);
                       $("body").css("overflow-y", "auto");
                   });

                   $(".social-icons, .phone-icon, #bloque-cambiar-idioma").fadeIn(450);
                   $(".bloque-footerrrss-2, header .bloque-telefono").fadeOut(450);

                   abierto = false;
               } else {
                   menuButton.addClass(closeSelector).removeClass(buttonClass);

                   $(menuSelector).fadeIn(450);
                   $(menuItems).fadeInWithAnim(100, animClass);

                   $("body").css("overflow-y", "hidden");

                   $(".social-icons, .phone-icon, #bloque-cambiar-idioma").fadeOut(450);
                   $(".bloque-footerrrss-2, .bloque-telefono").fadeIn(450);

                   abierto = true;
               }
            });
        });
    };

    $.fn.fadeInWithAnim = function(delay, selectedClass) {
        let timeOuts = [];

        function makeEffect(obj) {
            obj.addClass(selectedClass);
        }
        function clearAllTimeouts() {
            for (key in timeOuts) {
                clearTimeout(timeOuts[key]);
            }
        }
        clearAllTimeouts();
        $(this).each(function(index) {
            timeOuts[index] = setTimeout(makeEffect, index * delay, $(this));
        });
    };

    $.fn.fadeOutWithAnim = function(delay, selectedClass, callback) {
        let timeOuts = [],
            menu = $(this);

        function makeEffect(obj) {
            obj.removeClass(selectedClass);
        }
        function clearAllTimeouts() {
            for (key in timeOuts) {
                clearTimeout(timeOuts[key]);
            }
        }
        clearAllTimeouts();
        $(this).each(function(index) {
            timeOuts[index] = setTimeout(makeEffect, index * delay, $(this));
            if(index == menu.length - 1) {
                if(typeof callback == 'function')
                    setTimeout(function() {
                        callback();
                    }, index * delay);
            }

        });
    }

}(jQuery));