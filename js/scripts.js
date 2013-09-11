$(document).ready(function(){
	$('.carousel-inner').find('img').click(function(){
		var clone = $(this).clone();
		$('#canvas').html(clone);
	});
});

