const ctx = document.getElementById('obj01');

class Segment {
    constructor (ctx, myid) {
        this.ctx = ctx;
        this.myid = myid;
        this.opc0 = "fill:none;stroke:#f19a6b;stroke-width:4;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
        this.opc1 = "fill:none;stroke:#f19a6b;stroke-width:4;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
    }
    update (en) {
        var sid = this.ctx.contentDocument.getElementById(this.myid);
        var opc = this.opc0;
        if (en) {
            opc = this.opc1;
        }
        sid.setAttribute("style", opc);
    }
}

class Digit {
    constructor (ctx, segments) {
        this.ctx = ctx;
        this.segments = segments;
        this.value=-1;
        this.d0 = [0,0,0,0,0];
        this.d1 = [1,0,0,0,0];
        this.d2 = [0,1,0,0,0];
        this.d3 = [0,0,1,0,0];
        this.d4 = [0,0,0,1,0];
        this.d5 = [1,0,0,1,0];
        this.d6 = [0,0,0,0,1];
        this.d7 = [1,0,0,0,1];
        this.d8 = [0,1,0,0,1];
        this.d9 = [1,1,0,0,1];
        this.segvalues = [this.d0, this.d1, this.d2, this.d3, this.d4, this.d5, this.d6, this.d7, this.d8, this.d9];
    }

    setvalue(value) {
        if (value!=this.value) {
            this.value = value;
            var segvec = this.segvalues[value];
            for (var i=0; i<5;i++){
                this.segments[i].update(segvec[i]);
            }
        }
    }
}

function digextract(dateobj, pos){
    var h = dateobj.getHours();
    var m = dateobj.getMinutes();
    let value = 0;
    if (pos==4){
        value = Math.floor(h/10);
    } else if (pos==3){
        value = h%10;
    } else if (pos==2){
        value = Math.floor(m/10);
    } else if (pos==1){
        value = m%10;
    }
    return value;
}

function clock(){
    const tdate = new Date();
    //var timetext = tdate.getHours().toString() + ":" + tdate.getMinutes().toString();
    //console.log(timetext);
    dig1 = digextract(tdate, 1);
    dig2 = digextract(tdate, 2);
    dig3 = digextract(tdate, 3);
    dig4 = digextract(tdate, 4);
    digit1.setvalue(dig1);
    digit2.setvalue(dig2);
    digit3.setvalue(dig3);
    digit4.setvalue(dig4);    
}

// Create digits with group of segments
let s1a = new Segment(ctx, "d1a");
let s1b = new Segment(ctx, "d1b");
let s1c = new Segment(ctx, "d1c");
let s1d = new Segment(ctx, "d1d");
let s1e = new Segment(ctx, "d1e");
let digit1 = new Digit(ctx, [s1a,s1b,s1c,s1d,s1e]);

let s2a = new Segment(ctx, "d2a");
let s2b = new Segment(ctx, "d2b");
let s2c = new Segment(ctx, "d2c");
let s2d = new Segment(ctx, "d2d");
let s2e = new Segment(ctx, "d2e");
let digit2 = new Digit(ctx, [s2a,s2b,s2c,s2d,s2e]);

let s3a = new Segment(ctx, "d3a");
let s3b = new Segment(ctx, "d3b");
let s3c = new Segment(ctx, "d3c");
let s3d = new Segment(ctx, "d3d");
let s3e = new Segment(ctx, "d3e");
let digit3 = new Digit(ctx, [s3a,s3b,s3c,s3d,s3e]);

let s4a = new Segment(ctx, "d4a");
let s4b = new Segment(ctx, "d4b");
let s4c = new Segment(ctx, "d4c");
let s4d = new Segment(ctx, "d4d");
let s4e = new Segment(ctx, "d4e");
let digit4 = new Digit(ctx, [s4a,s4b,s4c,s4d,s4e]);

setInterval(clock, 1000);