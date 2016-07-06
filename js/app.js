

$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  });


  $('.ryu').click(function(){
     $('.hadouken').show().animate(
     {'left': '1020px'}, 500,
     function(){
      $(this).hide();
      $(this).css('left','20px');
      console.log('this is working');
     })

  })
  .mousedown(function(){
    playHadouken();
    $('.ryu-throwing').show();
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
     $('.hadouken').show();

$('.hadouken').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '20px');
    });


  })
  .mouseup(function(){
    $('.hadouken').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });



$(document).keydown(function(x){
if (x.keyCode == 88) {
  $('.ryu-cool').show();
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
}

});

$(document).keyup(function(x){
  if (x.keyCode == 88) {
$('.ryu-cool').hide();
$('.ryu-ready').hide();
$('.ryu-throwing').hide();
$('.ryu-still').show();
}

});

});



function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

//this is the code for the streetfigther
