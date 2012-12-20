function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

$(document).ready(function() {
	
	preload([
    	'./images/home_bg_re.jpg',
    	'./images/home_bg.jpg',
    	'./images/home_link.png'
	]);	

	var re = true;
	function positionBg() {
		//determine height of backstretch container
		var bgHeight = $(window).height() - 12;
		$('.bg').height(bgHeight);
		//start backstretch for full page image background 
		if (re != false) {
			$('.bg').backstretch('./images/home_bg_re.jpg');	
		} else {
			$('.bg').backstretch('./images/home_bg.jpg');
		}
	}

	//center the content above backstretched image
	function positionContent() {
		//get all the values
		var bgHeight = $(window).height() - 12,
		bgWidth = $(window).width(),
		halfWidth = bgWidth / 2,
		halfHeight = bgHeight / 2;
		//now change the positioning of the container to match
		$('.content').css({
			'left' : halfWidth - 185,
			'top' : halfHeight - 185
		});
	}

	//start everything up on load
	$(window).load(function() {
		//first do the backstretch container		
		positionBg();
		//now lets re-center the content
		positionContent();
	});

	//if window resizes, we need to poll for the window height again to adjust everything
	$(window).resize(function() {
		//first do the backstretch container		
		positionBg();
		//now lets re-center the content
		positionContent();
	});

	$('.first').mouseenter(function() {
		re = true;
	    $('.bg').backstretch('./images/home_bg_re.jpg');
	});

	$('.last').mouseenter(function() {
	   re = false;
	   $('.bg').backstretch('./images/home_bg.jpg');  
	});
});