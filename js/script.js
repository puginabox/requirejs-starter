define(['jquery'], function(Jquery) {

console.log( "ready!" );

	$('dd').filter(':nth-child(n+4)').addClass('hide');
	$('dl').on('mouseenter', 'dt', function() {
		$(this)
			.next()
				.slideDown(200)
				.siblings('dd')
					.slideUp(200);
	});
	console.log( "still going!" );
});



    
