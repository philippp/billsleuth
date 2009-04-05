$(document).ready(function(){
  $.each($('.action_item'), function(which, each){
    $(each).find('.action_header').click(function(){
      $('.content').slideUp();
      $(each).find('.content').slideDown();
    });
  });
});

