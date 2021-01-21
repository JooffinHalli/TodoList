$('input').keypress(function(e) {
	if (e.which === 13) {
		var itemText = $(this).val();
		$(this).val(' ');
		$('ol').append('<li>' + itemText + '<span><i class="fas fa-backspace"></span></li>');
	}
})
$('ol').on('click', 'span', function(e) {
	e.stopPropagation();
	$(this).parent().slideUp(200, function() {
		$(this).remove();
	})
})
$('ol').on('click', 'li', function() {
	$(this).toggleClass('done')
})
$('.hspan').on('click', function() {
	$('input').slideToggle();
})
