//const url = 'https:www.zenkokuturiba.com/wp-json/wp/v2/posts/';
//let rest_url = url+'?per_page=5&page=';
//let page = 1;
//let article = "";
//
////①初回とクリック時で都度読み込む テストではjsonpうまくいかず。。。
//$.getJSON(rest_url+page, function(json){
//    $.each(json, function (i, item) {
//        article += '<li>'+item.post_meta.address+'</li>\n';
//    });
//    $('.ArchiveArea').append(article);
//});
//    
//$('.more').on('click' , function(){
//    page++;
//    $.getJSON(rest_url+page, function(json){
//        $.each(json, function (i, item) {
//            article += '<li>'+item.post_meta.address+'</li>\n';
//        });
//        $('.ArchiveArea').empty().append(article);
//    });
//});
//
////②コールバック関数で都度読み込む（結果都度getjsonを読み込むので同じ）テストではjsonpうまくいかず。。。
//function get_contents(rest_url,page) {
//    console.log(rest_url);
//    $.getJSON(rest_url+page, function(json){
//        $.each(json, function (i, item) {
//            article += '<li>'+item.post_meta.address+'</li>\n';
//        });
//        $('.ArchiveArea').empty().append(article);
//    });
//}
//get_contents(rest_url,page);
//$('.more').on( 'click', function() {
//    page++;
//    get_contents(rest_url,page);
//});
//
//
//
//
//
//
//
//
// //指定された秒数だけ待つ deferred
//function wait(sec) {
//    let d = $.Deferred();
//    setTimeout(function() {
//        d.resolve();
//    }, sec * 1000);
//    return d.promise();
//}
// 
//$.when(
//    $.getJSON(rest_url+page),
//    wait(1)  //1秒待ってから成功を返す deferred
//)
//.done(function(data) {
//    console.log(data);
//});
/*https:www.tam-tam.co.jp/tipsnote/javascript/post5807.html*/



//URLのパラメータやアンカーを判断して処理を変更する方法

//$(document).ready( function(){
//    let parmsample = "https://www.zenkokuturiba.com/wp-json/wp/v2/posts/?per_page=5&search=明石";
//    let urlParam = location.search.substring(1); //URLのパラメータを取得
//    let decodeuri = decodeURI(parmsample);//文字化けする場合decodeを使う
//    
//    if(urlParam) { 
//      let param = urlParam.split('&'); //「&」が含まれている場合は「&」で分割
//      let paramArray = []; //パラメータを格納する用の配列を用意
//      for (i = 0; i < param.length; i++) { //用意した配列にパラメータを格納
//        let paramItem = param[i].split('=');
//        paramArray[paramItem[0]] = paramItem[1];
//      }
//      
//      if (paramArray.id == '明石') { //パラメータidがosakaかどうかを判断する
//        $('.pram').append('<p>明石やで</p>');
//
//     } else {
//        $('.pram').append('<p>明石ちゃうゆうてる</p>');
//      }
//    }
//});
    
/* let param = urlParam.split('&');// 「&」が含まれている場合は「&」で分割
    if(urlParam) { 
      let paramArray = []; //パラメータを格納する用の配列を用意
      for (i = 0; i < param.length; i++) { 用意した配列にパラメータを格納
        let paramItem = param[i].split('=');
        paramArray[paramItem[0]] = paramItem[1];
      }
      if (paramArray.id = '明石') { //パラメータidがosakaかどうかを判断する
        $('.pram').append('<p>明石やで</p>');
      } else {
        $('.pram').append('<p>明石ちゃうゆうてる</p>');
      }
    } */
/*https:www.tam-tam.co.jp/tipsnote/javascript/post9911.html*/
   






    




