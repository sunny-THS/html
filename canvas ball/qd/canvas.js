window.onload = function(){
var canvas=document.querySelector("canvas");
canvas.width=500;
canvas.height=500;
var context=canvas.getContext("2d");
var x=Math.random()*500;
var dx=4;
var r=15;
var y=Math.random()*500;
var dy=4;
function animate(){
    requestAnimationFrame(animate);
    context.beginPath(); 
	context.clearRect(0,0,500,500);
    // document.body.style.backgroundColor=bg();
    context.arc(x,y,r,0,2*Math.PI,false);
    context.fillStyle="#0ff";
	context.fill();
	context.closePath();
	
	if(x+r>500 || x-r<0){
		dx=-dx;
	}
	if(y+r>500 || y-r<0){
		dy=-dy;
	}
	x+=dx;
	y+=dy;
	
}
animate();
// function bg(){
// context.beginPath();
// for(var c=0,color=0;c< 10;c++){
    // for(var ro=0;ro< 10;ro++){
        // context.strokeStyle="hsl("+color+",100%,50%)";
        // context.strokeRect(c*50,ro*50,49,49);
        // color+=50;
        // context.closePath();
        
    // }
// }
// }
}