/**
 * jQuery.Passwordify.js
 * Written by: Jay Simons
 * Cloudulus.Media (https://code.cloudulus.media)
 */

if (window.jQuery) {
    (function ($) {
        $.fn.loadButton = function (action, opts) {
            if (typeof action === typeof undefined) action = 'on';
            var settings = $.extend({
                faClass: 'fas',
                faIcon: 'fa-cog',
                doSpin: true,
                loadingText: 'Saving...',
                loadingBackground: 'darkred',
                loadingForeground: 'white'
            }, opts);

            var label = this.text();
            var origBG = this.css('background');
            var origFG = this.css('color');

            if (action == 'on') {
                this.attr('data-label', label);
                this.attr('data-orig-bg', origBG);
                this.attr('data-orig-fg', origFG);
                this.css('background', settings.loadingBackground);
                this.css('color', settings.loadingForeground);
                var html = '<i style="color: ' + settings.loadingForeground + ';" class="' + settings.faClass + ' ' + settings.faIcon;
                if (settings.doSpin) html = html + ' fa-spin';
                html = html + '"></i> <span style="color: ' + settings.loadingForeground + ' !important; animation: blinker 1s linear infinite;"> ' + settings.loadingText + '</span>';
                this.html(html);
                this.blur();
            } else if (action == 'off') {
                this.html(this.data('label'));
                this.css('background', this.data('orig-bg'));
                this.css('color', this.data('orig-fg'));
            }
            return this;
        }
    })(jQuery);
} else {
    console.log("loadButton.js: This class requies jQuery > v3!");
}