<!DOCTYPE html>
<html>
<head>
<?php
    $title          = "";
    $keyword        = "";
    $description    = "";
    $thumbs         = "";
    $favicon        = "";
?>
<meta charset="UTF-8">
<meta content="text/css" http-equiv="Content-Style-Type" />
<meta content="text/javascript" http-equiv="Content-Script-Type" />
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="expires" content="86400">
<meta http-equiv="Content-Language" content="ja">
<meta name="Robots" content="noodp">
<meta name="Author" content="">
<meta name="copyright" content="" />
<title><?php echo $title; ?></title>
<meta name="keywords" content="<?php echo $keyword; ?>" />
<meta name="description" content="<?php echo $description; ?>" />
<link rel="icon" href="<?php echo $favicon; ?>" sizes="32x32" />
<link rel="icon" href="<?php echo $favicon; ?>" sizes="192x192" />
<link rel="apple-touch-icon" href="<?php echo $favicon; ?>" />
<meta name="msapplication-TileImage" content="<?php echo $favicon; ?>" />
<link rel="canonical" href="<?php echo (empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo $title; ?>" />
<meta property="og:description" content="<?php echo $description; ?>" />
<meta property="og:url" content="<?php echo (empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />
<meta property="og:site_name" content="<?php echo $title; ?>" />
<meta property="og:image" content="<?php echo $thumbs ; ?>" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="<?php echo $title; ?>" />
<meta name="twitter:description" content="<?php echo $description; ?>" />
<meta name="twitter:image" content="<?php echo $thumbs ; ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script defer type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
<script defer type='text/javascript' src="//cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
<script defer type='text/javascript' src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script defer src="//cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/gsap.min.js"></script>
<script defer src="//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
<script defer src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.min.js"></script>
<script defer src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
<script defer src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
<script defer src="//cdn.jsdelivr.net/npm/gsap@3.7.0/dist/ScrollTrigger.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/tsparticles-engine"></script>
<script defer src="https://cdn.jsdelivr.net/npm/tsparticles/tsparticles.bundle.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/jquery-particles"></script>
<script defer src="https://cdn.jsdelivr.net/npm/tsparticles-preset-fireworks@2/tsparticles.preset.fireworks.bundle.min.js"></script>
<script defer src="js/inview.min.js"></script>
<script defer type="text/javascript" src='js/config.js'></script>
<script defer type="text/javascript" src='js/04_mihofilter.js'></script>
<script defer type="text/javascript" src='js/bgmove.js'></script>
<script defer type="text/javascript" src='js/contact.js'></script>
<script defer type="text/javascript" src='js/inview_setting.js'></script>
<script src="https://cdn.jsdelivr.net/npm/bubbly-bg@1.0.0/dist/bubbly-bg.js"></script>
<link href="css/cssanimation.css" rel="stylesheet">
<link rel='stylesheet' id='theme_base_css' href='css/basestyle.css?ver=<?php echo date('Y-m-d-H-i-s'); ?>' media='all' />
<script defer>
window.addEventListener("load", function() {
    let el = document.createElement("script");
    if(document.URL.match(/contact/)) {
    	console.log("参考：https://rfs.jp/sb/javascript/js-lab/load-js.html");
    }if(document.URL.match(/page01/)){
        el.src = "js/page01.js";
        console.log(el.src);
        document.body.appendChild(el);
        console.log("pe-ji");
    }
    if(document.URL.match(/page02/)){
        el.src = "js/page02.js";
        console.log(el.src);
        document.body.appendChild(el);
        console.log("pe-ji");
    }
    else{
        el.src = "js/gsaps.js";
        console.log(el.src);
        document.body.appendChild(el);
        console.log("top");
    }
});
</script>
<?php $nowpage = (empty($_SERVER['HTTPS']) ? 'http:/' : 'https:/') . $_SERVER['SCRIPT_NAME'];?>

<?php $hoemedir = $_SERVER["HTTP_HOST"] . '/anken/test/test_mihomon'?>
<?php echo $hoemedir?>
<script>
    const nowpage = '<?=$nowpage?>';
    const homedir = '<?=$hoemedir?>';
</script>

</head>
<body id="page_top" class="body_back_black">
<div class="pageWap">
    <?php include 'header/header_pc.php'; ?>

