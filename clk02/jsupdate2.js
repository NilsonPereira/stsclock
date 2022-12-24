function clock(){
    const now = new Date();
    const ctx = document.getElementById('obj01');
    const ctx2 = ctx.contentDocument.getElementById('layer2');
            
    //if(frameID<1.0){
    //    console.log(ctx2)
    //}
        
    frameID = (frameID+0.6)%360
    //frameID++
    ang = frameID.toFixed(1)
    rot = "rotate(" + ang + " 52.916672 52.916672)"
    //console.log(rot)
    ctx2.setAttribute("transform", rot)

}

var frameID=0.0;
setInterval(clock, 100);