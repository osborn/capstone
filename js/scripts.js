$(document).ready(function(){
	$('.carousel-inner').find('img').click(function(){
		var clone = $(this).clone();
		$('#canvas').html(clone);
		$('#canvas').append('<p>$15</p>');
	});

	$('#color1').click(function(){
		$('#canvas').html('<img src="img/picture-three-colored.png">');
		$('#canvas').append('<p>$15</p>');
	});
});

