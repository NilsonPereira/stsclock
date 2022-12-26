const ctx = document.getElementById('obj01');

class Segment {
    constructor (ctx, myid, pos0, pos1) {
        this.ctx = ctx;
        this.pos0 = pos0;
        this.pos1 = pos1;
        this.enable = false;
        this.myid = myid;
    }
    update (en) {
        var sid = this.ctx.contentDocument.getElementById(this.myid);
        var pos = this.pos0;
        if (en){
            pos = this.pos1;
        }
        sid.setAttribute("d", pos);
    }
}

class Digit {
    constructor (ctx, segments) {
        this.ctx = ctx;
        this.segments = segments;
        this.value=0;
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

function clock(){
    var dd = fid%10;
    digit1.setvalue(dd);
    fid++;
}

var fid = 0;
let s1a = new Segment(ctx, "d1a", "M 40,10 40,40", "M 40,10 70,10");
let s1b = new Segment(ctx, "d1b", "M 40,40 40,10", "M 40,40 70,40");
let s1c = new Segment(ctx, "d1c", "M 40,10 40,40", "M 40,10 70,40");
let s1d = new Segment(ctx, "d1d", "M 40,40 40,10", "M 40,40 70,10");
let s1e = new Segment(ctx, "d1e", "M 40,10 40,40", "M 70,10 70,40");
let digit1 = new Digit(ctx, [s1a,s1b,s1c,s1d,s1e]);

let s2a = new Segment(ctx, "d2a", "M 40,10 40,40", "M 40,10 10,10");
let s2b = new Segment(ctx, "d2b", "M 40,40 40,10", "M 40,40 10,40");
let s2c = new Segment(ctx, "d2c", "M 40,10 40,40", "M 40,10 10,40");
let s2d = new Segment(ctx, "d2d", "M 40,40 40,10", "M 40,40 10,10");
let s2e = new Segment(ctx, "d2e", "M 40,10 40,40", "M 10,10 10,40");
let digit2 = new Digit(ctx, [s2a,s2b,s2c,s2d,s2e]);

let s3a = new Segment(ctx, "d3a", "M 40,10 40,40", "M 40,10 70,10");
let s3b = new Segment(ctx, "d3b", "M 40,40 40,10", "M 40,40 70,40");
let s3c = new Segment(ctx, "d3c", "M 40,10 40,40", "M 40,10 70,40");
let s3d = new Segment(ctx, "d3d", "M 40,40 40,10", "M 40,40 70,10");
let s3e = new Segment(ctx, "d3e", "M 40,10 40,40", "M 70,10 70,40");
let digit3 = new Digit(ctx, [s3a,s3b,s3c,s3d,s3e]);

let s4a = new Segment(ctx, "d1a", "M 40,10 40,40", "M 40,10 70,10");
let s4b = new Segment(ctx, "d1b", "M 40,40 40,10", "M 40,40 70,40");
let s4c = new Segment(ctx, "d1c", "M 40,10 40,40", "M 40,10 70,40");
let s4d = new Segment(ctx, "d1d", "M 40,40 40,10", "M 40,40 70,10");
let s4e = new Segment(ctx, "d1e", "M 40,10 40,40", "M 70,10 70,40");
let digit4 = new Digit(ctx, [s4a,s4b,s4c,s4d,s4e]);

setInterval(clock, 1000);