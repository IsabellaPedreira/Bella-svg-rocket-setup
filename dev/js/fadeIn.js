import { gsap } from "gsap";

gsap.set("#spaceship",{transformOrigin:"center"});
gsap.set("#planet",{transformOrigin:"center"});

let time = 0.25;

export let fadeInTL = gsap.timeline();
fadeInTL.from("#mountains",{alpha:0, duration:time, scale:20})
        .from("#bushes-mountain",{alpha:0, duration:time, scale:20})
        .from("#terrain",{alpha:0, duration:time, scale:20})
        .from("#comet",{alpha:0, duration:time, scale:20})
        .from("#planet",{alpha:0, duration:time, scale:20})
        .from("#aliens",{alpha:0, duration:time, scale:20})
        .from("#spaceship",{alpha:0, duration:time, scale:20})
        .from("#bushes-2Btrees",{alpha:0, stagger:0.25, duration:time},"-=2");