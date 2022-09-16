$(function () {
    //sconsole.log(nowpage);
     var headerHight = $(".FvNav").outerHeight();
     var blockh2 = $(".blockh2").outerHeight();
     var hash = $( location ).attr('hash');
    $('a[href^="#"]').click(function(e) {
        if(hash){
          var target = $(hash).offset().top;
          $('html,body').animate({scrollTop: target}, 'slow');
        }
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - (headerHight+blockh2);
        $.when(
            $("html, body").animate({scrollTop: position }, 400, "swing"),
            e.preventDefault(),
        ).done(function() {
            var diff = target.offset().top - (headerHight+blockh2);
            if (diff === position) {
            } else {
                    $("html, body").animate({
                    scrollTop: diff
                    }, 10, "swing");
            }
        });
    });
});


