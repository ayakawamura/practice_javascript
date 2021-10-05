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

$(function(){
  $(".box1").slideDown
  (function(){
    $(".box1").css({
      "background-color":'#0000FF',
      "width":"200px",
      "height":"100px"
    }).slideUp();
  });
});

