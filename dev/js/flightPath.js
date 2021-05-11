import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightTL = gsap.timeline();

flightTL.to("#spaceship", {
    duration: 6,
    motionPath: {
        path: "#r-loops",
        align:"#r-loops",
        alignOrigin: [0.5, 0.5 ], 
        autoRotate: 90
    },
    ease: "power4.out"
});


// MotionPathHelper.create("#spaceship");