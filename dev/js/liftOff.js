import { gsap } from "gsap";

gsap.set("#spaceship",{transformOrigin:"center"});
gsap.set("#smokeA",{transformOrigin:"center bottom"});
gsap.set("#smokeB",{transformOrigin:"center bottom"});
gsap.set("#smokeC",{transformOrigin:"center bottom"});
// gsap.set("#smoke-3",{display:"none"});
// gsap.set(".smoke",{display:"none"});

export let liftOffTL = gsap.timeline();

liftOffTL.to("#spaceship",{duration:0.15, rotation:-10,ease:"none"})
        .to("#spaceship",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        // .to("#spaceship",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
        .from("#smokeA",{duration:3.5, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
        .from("#smokeB",{duration:4, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
        .from("#smokeC",{duration:4, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
        .to("#spaceship",{duration:5, y:"-=700", ease: "power3.in"},"upAndAway")
        // .to("#Star1",{duration:5, y:"+=700", ease: "power3.in"},'upAndAway')
        // .to("#Star2",{duration:5, y:"+=600", ease: "power3.in"},'upAndAway')
        // .to("#Star3",{duration:5, y:"+=500", ease: "power3.in"},'upAndAway')
        // .from("#space",{duration:5,alpha:0, ease: "power3.in"},'upAndAway');


export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#smokeA",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
.to("#smokeB",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")
.to("#smokeC",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
// .to("#right-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")

// function controlFlames(){
//     gsap.set(".flames",{display:"block"});
//     flamesTL.play()
// }
