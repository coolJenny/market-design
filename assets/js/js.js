function SmoothScroll(target, speed, smooth) {
	if (target == document)
        target = (document.documentElement || document.body.parentNode || document.body) // cross browser support for document scrolling
    var moving = false
    var pos = target.scrollTop
    target.addEventListener('mousewheel', scrolled, false)
    target.addEventListener('DOMMouseScroll', scrolled, false)

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling
        var delta = e.delta || e.wheelDelta;
        if (delta === undefined) {
            //we are on firefox
            delta = -e.detail;
        }
        delta = Math.max(-1, Math.min(1, delta)) // cap the delta to [-1,1] for cross browser consistency

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight)) // limit scrolling

        if (!moving) update()
    }

	function update() {
		moving = true
		var delta = (pos - target.scrollTop) / smooth
		target.scrollTop += delta
		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

    var requestFrame = function() { // requestAnimationFrame cross browser
    	return (
    		window.requestAnimationFrame ||
    		window.webkitRequestAnimationFrame ||
    		window.mozRequestAnimationFrame ||
    		window.oRequestAnimationFrame ||
    		window.msRequestAnimationFrame ||
    		function(func) {
    			window.setTimeout(func, 1000 / 50);
    		}
    		);
    }()
}
function init(){
	new SmoothScroll(document,120,12)
}

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