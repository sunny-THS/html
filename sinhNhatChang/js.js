$(document).ready(function(){
$('.box').hover(
  function(){
    $('#card').css({'top':'-100px','opacity':1});
},
  function(){
    $('#card').css({'top':0,'opacity':0});
});

$('#card').click(function(){
  $('.khungChuc').css({'display':'block',})
});

$('#outB').click(function() {
	$('.khungChuc').css({'display':'none',})
});

});
