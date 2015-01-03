$(document).ready(function() {
	
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-127px')
			});
	})
	.mouseup(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	});

	$('html').keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});

});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}