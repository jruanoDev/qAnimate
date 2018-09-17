let menuDefaults = {
    animClass: null,
    openButton: null,
    closeButton: null
};

$.fn.makeMenu = function(options) {
    menuSettings = $.extend({}, menuDefaults, options || {});

    return this.each(function() {
        let menu = $(this),
            animClass = menuSettings.animClass,
            openButton = $(menuSettings.openButton),
            closeButton = $(menuSettings.closeButton);

        openButton.on('click', function() {
            menu.addClass(animClass);
        });

        closeButton.on('click', function() {
            menu.removeClass(animClass);
        });
    });
};