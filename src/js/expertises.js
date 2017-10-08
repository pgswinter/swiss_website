$(document).ready(function(){
	$('.amc-expertise').itemnav();
	$('.nav-mobi').navMobi();
	$('.amc-expertise').expandDIV({
		click_button: $('.amc-expertise .expand-wrap h4'),
		active_class: $('.amc-expertise .expand-wrap'),
		icon_arrow: $('.amc-expertise .expand-wrap .title i'),
	})
});
