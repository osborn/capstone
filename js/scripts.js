$(document).ready(function(){
	$('.carousel-inner').find('img').click(function(){
		var clone = $(this).clone();
		$('#canvas').html(clone);
	});
});



function getPicture(){
	var styles = new Array("#picture-one", "#picture-two", "#picture-three");


	for (var i=0; i<styles.length; i++){
		$(styles[i]).click(function(){
			$('#canvas').html(styles[0]);
		});
	}
}
