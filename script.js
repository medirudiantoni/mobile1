
var startingX , startingY , movingX , movingY ;
function touchStart(evt){
startingX = evt.touches[0].clientX ;
startingY = evt.touches[0].clientY ;
}
function touchMove(evt){
    movingX = evt.touches[0].clientX ;
	movingY = evt.touches[0].clientY ;
}
function touchEnd(){
    if(startingX+100 < movingX){
	    window.history.back();
	} else if(startingX-100 > movingX) {
		window.history.forward();
    }
}
						
