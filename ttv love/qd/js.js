$(document).ready(function(){
  const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    background:'#fff',
    timer: 3000
  });

  toast({
    type: 'success',
    title: 'Hello❤️'
  });
})
var load = 0;
setInterval(function() {
  if(load<=100){
        load++;
        if(load == 100){
            $('#canvas').css({'display':'block',});
            $('.loading').css({'display':'none'});
            $('#h').css({'display':'none'});
        }
    }
    document.querySelector('#h').innerHTML = 'Loading ' + load+'%';
},80);
