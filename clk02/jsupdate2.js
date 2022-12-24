function clock(){
    const now = new Date();
    const ctx = document.getElementById('obj01');
    //console.log(ctx.attributes.type.ownerDocument.body.childNodes[1].contentDocument.childNodes[0].children[3])
    const ctx2 = ctx.attributes.type.ownerDocument.body.childNodes[1].contentDocument.childNodes[0].children[3];
    console.log(ctx2)
    frameID = (frameID+0.6)%360
    ang = frameID.toFixed(1)
    rot = "rotate(" + ang + " 52.916672 52.916672)"
    //console.log(rot)
    //ctx.setAttribute("transform", rot)

}

var frameID=0.0;
setInterval(clock, 1000);