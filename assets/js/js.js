$(document).ready(function(){

	var preloader = $('#preloader');
	$(window).on('load', function(){
		preloader.delay(2000).fadeOut(500).remove();
		AOS.init({
			offset: 300,
			duration: 500,
			easing: 'ease-in-out-cubic',
			delay: 200,
		});
	});

	$('table.gallery td[rowspan="3"]').height($('td').width()*0.75);
	$('table.gallery td[rowspan="6"]').height($('td').width()*1.5);
	$('table.gallery td[rowspan="2"]').height($('td').width()*0.5);

	$( window ).resize(function() {
		$('table.gallery td[rowspan="3"]').height($('td').width()*0.75);
		$('table.gallery td[rowspan="6"]').height($('td').width()*1.5);
		$('table.gallery td[rowspan="2"]').height($('td').width()*0.5);
	});

	$(window).scroll(function(event) {
		event.preventDefault();
		/* Act on the event */
		var top = $(this).scrollTop();
		if( top > 50){
			$('nav.navbar-fixed-top').fadeOut(300);
		}else{
			$('nav.navbar-fixed-top').fadeIn(300);
		}
	});

	wow = new WOW(
	{
		animateClass: 'animated',
		offset:       100,
		callback:     function(box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	}
	);
	wow.init();	

	$(".contact-us").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop: $("#contact-section").offset().top}, 1000);
		return false;
	});


});