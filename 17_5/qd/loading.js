let load=0;

function loading(){
    if(load<=100){
        load+=4;
        if(load >= 100){
            $('canvas').css({'display':'block'});
            $('.nextPage').css({'display':'block'});
            $('.loading').css({'display':'none'});
            clearInterval(loading);
        }
    }

    document.querySelector('.loading h1').innerHTML = 'Loading ' + load+'%';
}
