$(document).ready(function(){
	$('.bxslider').bxSlider({
		minSlides: 3,
		maxSlides: 3,
		slideWidth: 290,
		slideMargin: 0
	});
	$('.bxslider2').bxSlider({
		minSlides: 3,
		maxSlides: 3,
		slideWidth: 290,
		slideMargin: 0
	});
	$('.bxslider3').bxSlider({
		minSlides: 3,
		maxSlides: 3,
		slideWidth: 290,
		slideMargin: 0
	});

	$('a.item-1').click(function(e) {
		$(this).addClass('active')
		$('a.item-2').removeClass('active')
		$('a.item-3').removeClass('active')
		$('div#item1').addClass('namew__tabs__input-show')
		$('div#item2').removeClass('namew__tabs__input-show')
		$('div#item3').removeClass('namew__tabs__input-show')
		return false;
	});
	$('a.item-2').click(function(e) {
		$(this).addClass('active')
		$('a.item-1').removeClass('active')
		$('a.item-3').removeClass('active')
		$('div#item2').addClass('namew__tabs__input-show')
		$('div#item1').removeClass('namew__tabs__input-show')
		$('div#item3').removeClass('namew__tabs__input-show')
		return false;
	});
	$('a.item-3').click(function(e) {
		$(this).addClass('active')
		$('a.item-2').removeClass('active')
		$('a.item-1').removeClass('active')
		$('div#item3').addClass('namew__tabs__input-show')
		$('div#item1').removeClass('namew__tabs__input-show')
		$('div#item2').removeClass('namew__tabs__input-show')
		return false;
	});
});