import React from "react";
import alien1 from "../../Image/alien1.png";
import alien2 from "../../Image/alien2.png";

function HomeMain(){
    return(
        <div className="homeContent1">
            <img src={alien1} className="homeAlien1" alt="homeAlien1" />
            <img src={alien2} className="homeAlien2" alt="homeAlien2" />
            <h2>インターネットにぽつりとうかぶちいさな星</h2>
            <h2>まわりのほしぼしからたくさんの人が集います</h2>
            <h2>静かに作業集中したい人</h2>
            <h2>お話ししながら作業したい人</h2>
            <h2>自分のいばしょがほしい人</h2>
            <h2>こどくを感じている人</h2>
            <h2>わくせいはみなさんをかんげいします</h2>
        </div>
    )
}

export default HomeMain;