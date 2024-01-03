import React from "react";
import DiscordLogo from "../../Image/Discord-logo.png";

function Hero(){
    return(
        <>
            <div className="background">
                <img src={DiscordLogo} class="DiscordLogo" alt="DiscordLogo"/>
                <h1 className="title">わくせいになります</h1>
            </div>
        </>
    )
}

export default Hero;