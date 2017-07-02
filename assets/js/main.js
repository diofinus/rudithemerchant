$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function(){
	if($(window).scrollTop() <= 10){
	 	$('#navbar').css({
	 		'background-color': 'initial'
	 	});
	 	$('.menu-item').removeClass('black-item').addClass('white-item');
	}else{
	 	$('#navbar').css({
	 		'background-color': '#FBFBFB'
	 	});
	 	$('.menu-item').removeClass('white-item').addClass('black-item');
	}
})

$(window).on('scroll', function () {
	var scrollTop     = $(window).scrollTop(),
        elementOffset = $('#navbar').offset().top;

    if(elementOffset <= 10){
	 	$('#navbar').css({
	 		'background-color': 'initial'
	 	});
	 	$('.menu-item').removeClass('black-item').addClass('white-item');
	 }else{
	 	$('#navbar').css({
	 		'background-color': '#FBFBFB'
	 	});
	 	$('.menu-item').removeClass('white-item').addClass('black-item');
	 }
})