function clock(){
    const now = new Date();
    const ctx = document.getElementById('layer2');
    //console.log(ctx)
    frameID = (frameID+0.6)%360
    ang = frameID.toFixed(1)
    rot = "rotate(" + ang + " 52.916672 52.916672)"
    //console.log(rot)
    ctx.setAttribute("transform", rot)

}

var frameID=0.0;
setInterval(clock, 100);