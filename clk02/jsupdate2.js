function clock(){
    const tdate = new Date();
    const tnow = Date.now();
    const ctx2 = ctx.contentDocument.getElementById('layer2');

    var secfrac = 6.0*(tdate.getSeconds()+((tnow%1000)/1000.0));
    var secang = (secfrac-90.0).toFixed(3);

    var rot = "rotate(" + secang + " 52.916672 52.916672)"
    ctx2.setAttribute("transform", rot)
    
    //if(oneshot){
        //console.log(octx2);
        //oneshot=0;
    //}
    
}

var oneshot = 1;

const ctx = document.getElementById('obj01');
setInterval(clock, 100);