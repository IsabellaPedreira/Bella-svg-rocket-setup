import { gsap } from "gsap";

export let planetTL = gsap.timeline();

planetTL.to ("#planet",{duration:6, scale:10,ease: "power4.out", x:"+=400", y:"+=400"});
            
