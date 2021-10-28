// $(function(){
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// // ボックスを青に
// $(function(){
//   $(".box1").css({
//     "background-color": '#0000FF',
//     'height': '100px'
//   });
// })

// // ボックスを上へスライド
// $(function(){
//   $('.box1').slideUp();
// });

// // 非表示を表示にする
// $(function(){
//   $(".box1").show();
//   $(".box1").css("background-color", '#0000FF');
// });

// // 表示を非表示に
// $(function(){
//   $(".box1").hide();
// });

// // 赤い箱をスライドダウンさせたあとに青い箱にしてスライドアップさせる　
// $(function(){
//   $(".box1").slideDown
//   (function(){
//     $(".box1").css({
//       "background-color":'#0000FF',
//       "width":"200px",
//       "height":"100px"
//     }).slideUp();
//   });
// });

// // アウスオーバーとかクリックとか
// $(function(){
//   $(".box1").on("click",function(){
//     $(".box1").addClass("box1-ext");
//   });
//   $(".box1").mouseout(function(){
//     $(".box1").removeClass("box1-ext");
//   });
// });

$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});