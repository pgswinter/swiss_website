$(window).ready(function(){
	if($('.counter').length > 0){
		$('.counter').counterUp({
	        delay: 10,
	        time: 5000
	    });
	}
	
    $('.scro-down').clickScroll({
		dest: $('.prom-amar')
	});
	$('.slidebox .close-btn').click(function(e){
		e.preventDefault();
		$(this).parent().addClass('hide-element');
	});
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('.slidebox').fadeIn();
		}
		else{
			$('.slidebox').fadeOut();
		}
	});
	$('.maxtaSLD').maxtaCRS({
		heightCRS: '450px'
	});
	$('.helo-amar.mobi-oran').amc_get_img({
		attr_pos_x: '25%'
	});
	$('.mobi-oran').amc_get_img();
});