/**
 * @author: Eugene Balaban <balaban.eugene@gmail.com>
 * @date: 07.02.11
 * @time: 11:05
 */
$(document).ready(function() {

	$('.newsBarHold').fadeGallery({
		listSelector: '#newsFeed > li',
		navCreate:		true,
		swichTime:		7000,
		delay:			800,
		fadeIEfix:		false,
		mouseOverPause:	true
	});	
	
	/*$('.stockBarHold').fadeGallery({
		listSelector: '#stockQuote > li',
		navCreate:		true,
		swichTime:		7000,
		delay:			800,
		fadeIEfix:		false,
		mouseOverPause:	true
	});	*/

	$('.returnsForm input[type="radio"]').ezMark();	
	
	//init custom scroll
	$(function() {
		$('.box .contentScrol').jScrollPane(
		{showArrows: true});
	});
	$('.restoreGallery').galleryScroll({
		btPrev: 'a.btnPrev',
		btNext: 'a.btnNext',
		holderList: 'div.holder',
		scrollElParent: 'ul',
		scrollEl: 'li',
		slideNum: 'div.switcher',
		duration : 1000,
		circleSlide: true,
		disableClass: 'disable',
		funcOnclick: null,
		autoSlide:false
	});
	$('.pollGallery').galleryScroll({
		btPrev: 'a.btnPrev',
		btNext: 'a.btnNext',
		holderList: 'div.holder',
		scrollElParent: 'ul',
		scrollEl: 'li',
		duration : 1000,
		circleSlide: false,
		disableClass: 'disable',
		funcOnclick: null,
		autoSlide:false
	});	


	//init tabs
	initTabs('#main', '.tabsetE li', '.tabBoxE .tabElE');	

});