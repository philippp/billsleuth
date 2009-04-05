$(document).ready(function(){
  $.each($('.action_item'), function(which, each){
    $(each).find('h1').click(function(){
      $('.content').slideUp();
      $(each).find('.content').slideDown();
    });
  });
});

