$(document).ready(function(){
	$('.filter').clickOpen();
	
	if($('#amc_grid').length>0){
		$('#amc_grid').masonry({
		  itemSelector: 'figure'
		});
	}
	
	$('.toggle-filter').moving_horizontal({
		body_moving: $('.filter-mobile')
	});
});