wpac_init = window.wpac_init || [];
  wpac_init.push({
    widget: 'Rating',
    id: 34155,
    el: 'wpac-rating-custom',
    size: 50,
    html: '<br/>{{=it.stars}} {{?it.count>0}}<br/>Rating: {{=it.rating}} <br/>Dari {{=it.count}} {{=it.votes}}{{?}}'
  });
  (function() {
    if ('WIDGETPACK_LOADED' in window) return;
    WIDGETPACK_LOADED = false;
    var mc = document.createElement('script');
    mc.type = 'text/javascript';
    mc.async = true;
    mc.src = '//cdn.widgetpack.com/widget.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
  })();