$('input').keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		if(todoText != '' && $('li').length < 6){
			$('ul').append('<li>' + todoText + '<span><i class="fa fa-trash"</i></span>');
		}
	}
});
$('ul').on('click', "span" , function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$('ul').on('click', 'li', function(){
	$(this).toggleClass('done');
});