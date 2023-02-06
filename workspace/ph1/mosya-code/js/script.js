$(function(){
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
  $(".circle-bg").removeClass('circleactive');
});


/*===========================================================*/
/*機能編 5-1-22 クリックしたら円形背景が拡大（左上から）*/
/*===========================================================*/


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

// ハンバーガーメニューを囲んだ大きいdivがg-nav
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
  $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

/*===========================================================*/
/*
/*===========================================================*/
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});


