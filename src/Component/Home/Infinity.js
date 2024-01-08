import React from "react";
import "../../infinity-scroll.css";

import alien1 from "../../Image/alien1.png";
import alien2 from "../../Image/alien2.png";
import alien3 from "../../Image/alien3.png";
import alien4 from "../../Image/alien4.png";
import alien5 from "../../Image/alien5.png";
import alien6 from "../../Image/alien6.png";
import alien7 from "../../Image/alien7.png";
import alien8 from "../../Image/alien8.png";
import alien9 from "../../Image/alien9.png";

function Infinity(){
    return(
        <div class="scroll-infinity">
        <div class="scroll-infinity__wrap">
          <ul class="scroll-infinity__list scroll-infinity__list--left">
            <li class="scroll-infinity__item"><img src={alien1} alt="alien1" /></li>
            <li class="scroll-infinity__item"><img src={alien2} alt="alien2" /></li>
            <li class="scroll-infinity__item"><img src={alien3} alt="alien3" /></li>
            <li class="scroll-infinity__item"><img src={alien4} alt="alien4" /></li>
            <li class="scroll-infinity__item"><img src={alien5} alt="alien5" /></li>
            <li class="scroll-infinity__item"><img src={alien6} alt="alien6" /></li>
            <li class="scroll-infinity__item"><img src={alien7} alt="alien7" /></li>
            <li class="scroll-infinity__item"><img src={alien8} alt="alien8" /></li>
            <li class="scroll-infinity__item"><img src={alien9} alt="alien9" /></li>
          </ul>
          <ul class="scroll-infinity__list scroll-infinity__list--left">
            <li class="scroll-infinity__item"><img src={alien1} alt="alien1" /></li>
            <li class="scroll-infinity__item"><img src={alien2} alt="alien2" /></li>
            <li class="scroll-infinity__item"><img src={alien3} alt="alien3" /></li>
            <li class="scroll-infinity__item"><img src={alien4} alt="alien4" /></li>
            <li class="scroll-infinity__item"><img src={alien5} alt="alien5" /></li>
            <li class="scroll-infinity__item"><img src={alien6} alt="alien6" /></li>
            <li class="scroll-infinity__item"><img src={alien7} alt="alien7" /></li>
            <li class="scroll-infinity__item"><img src={alien8} alt="alien8" /></li>
            <li class="scroll-infinity__item"><img src={alien9} alt="alien9" /></li>
          </ul>
        </div>
        </div>
    )
}

export default Infinity;
