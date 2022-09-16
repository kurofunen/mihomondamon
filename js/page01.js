(window.onload = function () {
        $('.sen').on('inview', function (event, isInView) {
            if (isInView) {$(this).addClass('active');} else {}
        });
        $('.playersliner').on('inview', function (event, isInView) {if (isInView) {
                $(this).addClass('active');} else {}
        });
        
        $('.manstriangle').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
                $(this).addClass('manstriangle_active');
                gsap.to('.manstriangle_active',
                    {
                        "clip-path": "inset(0 0 0 0)"
                    })
                window.setTimeout(function () {
                   //document.getElementByClassName("boxmans");時差で呼び出すとき
                }, 100);
                
            });
            $('.mansfig').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
                $(this).addClass('mansfig_active');
                gsap.to('.mansfig_active',
                    {
                        x: 0,
                        opacity: 1, 
                        ease: "power4.in"
                    }, '-=0.1', 100);
            });
             $('.mansitemname').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
                $(this).addClass('mansitemname_active');
                gsap.to('.mansitemname_active',
                    {
                    y: 0,
                    opacity: 1,
                    ease: "power4.in"
                }, '<');
            });
            $('.mansbtm').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
                $(this).addClass('mansbtm_active');
                gsap.to('.mansbtm_active',
                    {
                        y: 0,
                        opacity: 1,
                    });
            });
             $('.manstlpspan01').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
                $(this).addClass('manstlpspan01_active');
                gsap.to('.manstlpspan01_active',{
                     "clip-path": "inset(0 0 0 0)"
                }, '-=0.5');
            });
             $('.manstlpspan02').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
                $(this).addClass('manstlpspan02_active');
                gsap.to('.manstlpspan02_active',{
                     "clip-path": "inset(0 0 0 0)"
                }, '-=0.4');
            });
})();






/*参考：https://yumegori.com/gsap-scrolltrigger*/
//ScrollTrigger.create({
//    trigger: '.boxmans', //アニメーションが始まるトリガーとなる要素
//    start: 'top center',
//    onEnter: () => document.querySelector('.boxmans').classList.add('is-active'), 
//    once: true
//  });
//autoAlpha: 0,
//gsap.set('.mansfig', {x: -100, opacity: 0});
//gsap.set('.mansitemname', {y: 100, opacity: 0});
//gsap.set('.mansbtm', {y: 100, opacity: 0});
//let y = window.scrollY;
/*下からむり*/


//let controller = new ScrollMagic.Controller();
//var tl = new TimelineMax();
//$(function () {
//    
//    $(".boxmans").each(function (i, node) {
//        console.log(i);
//        new ScrollMagic.Scene({
//            triggerElement: this,
//            triggerHook: "onCenter"
//          })
//        .setClassToggle(node, "active"+i)
//        .addTo(controller)
//    });
//    
//
//});


//var tl = new TimelineMax();
//tl.to('.manstriangle',
//    {
//        "clip-path": "inset(0 0 0 0)"
//    }).to('.mansfig',
//    {
//        x: 0,
//        opacity: 1, 
//        ease: "power4.in"
//    }, '-=0.1').to('.mansitemname',
//    {
//        y: 0,
//        opacity: 1,
//        ease: "power4.in"
//    }, '<').to('.mansbtm',
//    {
//        y: 0,
//        opacity: 1,
//    }).to('.manstlpspan01',
//    {
//        "clip-path": "inset(0 0 0 0)"
//    }, '-=0.5').to(' .manstlpspan02',
//    {
//        "clip-path": "inset(0 0 0 0)"
//    }, '-=0.4');
















 






