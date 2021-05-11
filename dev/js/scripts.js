import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
// import { spaceshipTL } from "./spaceship"
import { liftOffTL } from "./liftOff"
import { flightTL } from "./flightPath"
import { planetTL } from "./planet"


gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        // .add(spaceShipTL)
        .add(liftOffTL)
        // .addLabel("marker")
        .add(flightTL,"same")
        .add(planetTL, "same");

        // mainTL.play("marker");
        mainTL.play();


// console.log(numberThing);

// GSDevTools.create();