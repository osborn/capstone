$(document).ready(function(){
	$('.carousel-inner').find('img').click(function(){
		var clone = $(this).clone();
		$('#canvas').html(clone);
	});

	$('#color1').click(function(){
		$('#canvas').html('<img src="img/picture-three-colored.png">');
	});
});

