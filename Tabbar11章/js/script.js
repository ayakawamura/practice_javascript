// tab1以外のコンテンツを非表示にする
$('#tab-contents .tab[id != "tab1"]').hide();

// tabをクリックした時の処理
$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
// .attr()でクリックしたタブのhrefの中身を取得してる
  event.preventDefault();
  // aタグの機能を無効にする
});