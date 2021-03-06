$.fn.recursiveFadeIn = function(delay, selectedClass) {
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

$.fn.recursiveFadeOut = function(delay, selectedClass, callback) {
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
};