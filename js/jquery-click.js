$(function() {

    function log_modal_event(event, modal) {
      if(typeof console != 'undefined' && console.log) console.log("[event] " + event.type);
    };

    $(document).on($.modal.BEFORE_BLOCK, log_modal_event);
    $(document).on($.modal.BLOCK, log_modal_event);
    $(document).on($.modal.BEFORE_OPEN, log_modal_event);
    $(document).on($.modal.OPEN, log_modal_event);
    $(document).on($.modal.BEFORE_CLOSE, log_modal_event);
    $(document).on($.modal.CLOSE, log_modal_event);
    $(document).on($.modal.AFTER_CLOSE, log_modal_event);
    $(document).on($.modal.AJAX_SEND, log_modal_event);
    $(document).on($.modal.AJAX_SUCCESS, log_modal_event);
    $(document).on($.modal.AJAX_COMPLETE, log_modal_event);

    $('#more').click(function() {
      $(this).parent().after($(this).parent().next().clone());
      return false;
    });

    $('#manual-ajax').click(function(event) {
      event.preventDefault();
      this.blur();
      $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
      });
    });

    $('a[href="#ex5"]').click(function(event) {
      event.preventDefault();
      $(this).modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
      });
    });

    $('a[href="#ex6-2b"],a[href="#ex6-3b"]').click(function(event) {
      event.preventDefault();
      $(this).modal({
        closeExisting: false
      });
    });

    $('a[href="#ex7"]').click(function(event) {
      event.preventDefault();
      $(this).modal({
        fadeDuration: 250
      });
    });

    $('a[href="#ex8"]').click(function(event) {
      event.preventDefault();
      $(this).modal({
        fadeDuration: 1000,
        fadeDelay: 0.50
      });
    });

    $('a[href="#ex9"]').click(function(event) {
      event.preventDefault();
      $(this).modal({
        fadeDuration: 1000,
        fadeDelay: 1.75
      });
    });

    $('a[href="#ex10"]').click(function(event){
      event.preventDefault();
      $(this).modal({
        closeClass: 'icon-remove',
        closeText: '!'
      });
    });

  });
