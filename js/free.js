//let str = 'じ ゅげむ';
//console. log( str. repeat( 3));
//let ex = /http( s)?:\/\/([\ w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/gi;
//let str1 = 'ファイルはhttp:// www. wings. msn. to/ から 入手 でき ます。'; 
//let str2 = 'ご 質問 は「 掲示板」へ'; 
//console. log( ex. test( str1)); // 結果： true console. log( ex. test( str 2)); // 結果： false

$(function () {
    $(window).on("load resize", function () {
        let pageWidth = window.innerWidth;
        let elementWidth = $('.element').outerWidth();
        if($('.actual')!==null){
            $('.actual').empty().append(elementWidth);//空にして入れる
            if(elementWidth === 500){
                $('.actual').css({
                     'background-color':'#ddf2fc',
                });
            }
            else if(elementWidth === 350){
                 $('.actual').css({
                     'background-color':'#ff9',
                });
            }
            else{
                 $('.actual').css({
                     'background-color':'#e91e6375',
                });
            }
        }
    });
});





//ランダムのループ
let num = Math.floor(Math.random() * 5);


console.log(num);