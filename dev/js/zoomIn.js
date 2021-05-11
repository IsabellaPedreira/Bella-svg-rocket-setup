import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#aliens",{transformOrigin:"center"});
gsap.set("#stars",{transformOrigin:"center"});
gsap.set("#comet",{transformOrigin:"center"});

let time = 0.25;

zoomTL.from("#stars",{duration:time, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
            .from("#Star1",{duration:time, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#Star2",{duration:time, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#Star3",{duration:time, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#aliens",{duration:time, scale:10,ease: "power4.out",y:"+=420"},"zoom");
