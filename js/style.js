// JavaScript Document


$(function(){
//開始

//スクロールトップ
	var showTop = 200;

	var fixedTop = $('#pagetop');
	fixedTop.on('click',function(){
		$('html,body').animate({scrollTop:'0'},500);
	});
	$(window).on('load scroll resize',function(){
		if($(window).scrollTop() >= showTop){
			fixedTop.fadeIn('normal');
		} else if($(window).scrollTop() < showTop){
			fixedTop.fadeOut('normal');
		}
	});
	
	

//終了	
});

//スクロールトップ

