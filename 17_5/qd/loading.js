let load=0;

function loading(){
    if(load<=100){
        load++;
        if(load == 101){
            $('canvas').css({'display':'block'});
            $('.loading').css({'display':'none'});
            clearInterval(loading);
        }
    }

    document.querySelector('.loading h1').innerHTML = 'Loading ' + load+'%';
}
