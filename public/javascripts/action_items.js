$(document).ready(function(){
  $.each($('.action_item'), function(which, each){
    $(each).find('.action_header').click(function(){
      $('.content').slideUp();
      $(each).find('.content').slideDown();
    });
  });
});


var sign_petition = function(){
    $.each($('.petition_form_text'), function( which, each){
	    each.value = "";
	});

    $('#petition_submit').hide();
    $('#petition_thanks').fadeIn();
}