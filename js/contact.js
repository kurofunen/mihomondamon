// AjaxでSTATIC FORMSにデータを送信
$('#submit').on('click', function (event) {
  event.preventDefault();// formタグによる送信を拒否
  let result = inputCheck();// 入力チェックをした結果、エラーがあるかないか判定
  let error = result.error;
  
  if (error == false) {// エラーが無かったらフォームを送信する
    // Ajaxでformを送信する
    $.ajax({
      url: 'https://api.staticforms.xyz/submit',
      type: 'POST',
      dataType: 'json',
      data: $('#form').serialize(),
      success: function (result) {
        alert('お問い合わせを送信しました。')
      },
      error: function (xhr, resp, text) {
        alert('お問い合わせを送信できませんでした。')
      }
    })
  } else {
      $('#tentacles').after('<span>'+message+'</span>');
      alert(message);
    }
});

$('#name').blur(function () {
    inputCheck();
});
$('#furigana').blur(function () {
    inputCheck();
});
$('#tentacles').blur(function () {
    inputCheck();
});
$('#otona').blur(function () {
    inputCheck();
});
   

// お問い合わせフォームの入力チェック
function inputCheck() {
    let result;// エラーのチェック結果
    let error = false;// エラーがなければfalse、エラーがあればtrue
    if ($('#name').val() == '') {
        $('#name').next().css({
            'color':'#ce2222',
            'display':'block'
        });
        $('#name').next().replaceWith('お名前を入力してください');
        $('#name').css('background-color', '#f79999');
        error = true;
     
    } else {
      $('#name').css('background-color', '#fafafa');
    }
    if ($('#furigana').val() == '') {
        $('#furigana').next().css({
            'color':'#ce2222',
            'display':'block'
        });
        $('#furigana').next().replaceWith("ふりがなを入力してください。");
        $('#furigana').css('background-color', '#f79999');
        error = true;
       
    } else {
      $('#furigana').css('background-color', '#fafafa');
   }
    
    
   if (error == true) {
      $('#submit').attr('src', 'img/skinmiho.svg');
      //message += '入力確認して\n';
    } else {
      $('#submit').attr('src', 'img/buttonsubmit.png');
    }
     // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error
    }
    // 戻り値としてエラーがあるかどうかを返す
    return result;
}

$(function () {
    $('.HeaderFvLinks').change(function(e){
         e.preventDefault()
         let val = $('.HeaderFvLinks').val();
        if($(this).val == ""){
            $('.HeaderFvLinks').after('<span>'+val+'</span>');
        }
        else{
           $('.HeaderFvLinks span').remove();
            $('.HeaderFvLinks').after('<span>'+val+'</span>');
        } 
    });
});