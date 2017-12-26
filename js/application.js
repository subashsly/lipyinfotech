

$(document).ready(function(){

  $("li a.page-scroll").click(function(){
        
          $('#toggle').toggleClass('active');
          $('#overlay').toggleClass('open');
          
    document.getElementById("myNav").style.width = "0%";

  
    });

$('#toggle').click(function() {
  
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 4000,
  pause: "false"
});
});

