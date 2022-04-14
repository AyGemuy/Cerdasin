jQuery(document).ready(function($) {
    // Set initial zoom level
    var zoom_level = 100;

    // Click events
    $('#zoom_in').click(function() {
        zoom_page(10, $(this))
    });
    $('#zoom_out').click(function() {
        zoom_page(-10, $(this))
    });
    $('#zoom_reset').click(function() {
        zoom_page(0, $(this))
    });

    // Zoom function
    function zoom_page(step, trigger) {
        // Zoom just to steps in or out
        if (zoom_level >= 120 && step > 0 || zoom_level <= 80 && step < 0) return;

        // Set / reset zoom
        if (step == 0) zoom_level = 100;
        else zoom_level = zoom_level + step;

        // Set page zoom via CSS
        $('body').css({
            transform: 'scale(' + (zoom_level / 100) + ')', // set zoom
            transformOrigin: '50% 0' // set transform scale base
        });

        // Adjust page to zoom width
        if (zoom_level > 100) $('body').css({
            width: (zoom_level * 1.2) + '%'
        });
        else $('body').css({
            width: '100%'
        });

        // Activate / deaktivate trigger (use CSS to make them look different)
        if (zoom_level >= 120 || zoom_level <= 80) trigger.addClass('disabled');
        else trigger.parents('ul').find('.disabled').removeClass('disabled');
        if (zoom_level != 100) $('#zoom_reset').removeClass('disabled');
        else $('#zoom_reset').addClass('disabled');
    }
});
