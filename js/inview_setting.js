(window.onload = function() {
    if(window.innerWidth < 840){
        
    }else {
        $('.bgContent').addClass('opacity_0_fade_set');
        $('.bgContent').on('inview', function(event, isInView) {if (isInView) {$(this).addClass('active');} else {}});
        $('.leafs').on('inview', function(event, isInView) {if (isInView) {$(this).addClass('active');} else {}});
        
    }
})();