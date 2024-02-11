import React from "react";
import { useState, useEffect } from "react";
import alien1 from "../../Image/alien1.png";
import alien2 from "../../Image/alien2.png";
import alien3 from "../../Image/alien3.png";
import alien4 from "../../Image/alien4.png";
import alien5 from "../../Image/alien5.png";
import alien6 from "../../Image/alien6.png";
import Infinity from "./Infinity.js";

const HomeMain = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  function GoDiscord() {
    window.location.replace("https://discord.gg/dm5399cQxS");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  if (scrollY >= 1000) {
    document
      .getElementById("homeContent1")
      .classList.add("homeContent1-fadeUp");
    document.getElementById("homeAlien1").classList.add("homeAlien1");
    document.getElementById("homeAlien2").classList.add("homeAlien2");
  }

  if (scrollY >= 1700) {
    document
      .getElementById("homeContent2")
      .classList.add("homeContent2-fadeUp");
    document.getElementById("homeAlien3").classList.add("homeAlien3");
    document.getElementById("homeAlien4").classList.add("homeAlien4");
  }

  if (scrollY >= 2000) {
    document
      .getElementById("homeContent3")
      .classList.add("homeContent3-fadeUp");
    document.getElementById("homeAlien5").classList.add("homeAlien5");
    document.getElementById("homeAlien6").classList.add("homeAlien6");
  }

  if (scrollY >= 3300) {
    document
      .getElementById("EveryOneWaiting")
      .classList.add("EveryOneWaiting-fadeUp");
  }

  if (scrollY >= 3300) {
    document
      .getElementById("buttonGoWakusei")
      .classList.add("buttonGoWakusei-fadeUp");
  }

  return (
    <>
      <div className="homeContent1" id="homeContent1">
        <img src={alien1} className="" id="homeAlien1" alt="homeAlien1" />
        <img src={alien2} className="" id="homeAlien2" alt="homeAlien2" />
        <h2>インターネットにぽつりとうかぶちいさな星</h2>
        <h2>まわりのほしぼしからたくさんの人が集います</h2>
        <h2>静かに作業集中したい人</h2>
        <h2>お話ししながら作業したい人</h2>
        <h2>自分のいばしょがほしい人</h2>
        <h2>こどくを感じている人</h2>
        <h2>わくせいはみなさんをかんげいします</h2>
      </div>
      <div className="homeContent2" id="homeContent2">
        <img src={alien3} class="" id="homeAlien3" alt="homeAlien3" />
        <img src={alien4} class="" id="homeAlien4" alt="homeAlien4" />
        <h2>わくせいには3種類のボイスチャンネルがあります</h2>
        <h2>モクモクチャンネルではモクモク作業を</h2>
        <h2>ノンビリチャンネルではノンビリお話を</h2>
        <h2>ワイワイチャンネルではワイワイゲームを</h2>
        <h2>あなたの気分によって使い分けましょう</h2>
        <h2>すべての通話チャンネルにはヘンテコなエイリアンたちがいます</h2>
        <h2>話しかけると何か返事が返ってくるかもしれませんね</h2>
      </div>
      <div className="homeContent3" id="homeContent3">
        <img src={alien5} class="" id="homeAlien5" alt="homeAlien5" />
        <img src={alien6} class="" id="homeAlien6" alt="homeAlien6" />
        <h2>ほかにもかいたイラストをのせるチャンネル</h2>
        <h2>好きな音楽を共有するチャンネル</h2>
        <h2>食べた料理の写真をみせるチャンネル</h2>
        <h2>筋トレの記録をじまんするチャンネル</h2>
        <h2>またリレー小説をみんなで考えたり</h2>
        <h2>
          誰でもおじょう様になれるおじょう様部などヘンテコなものもあります
        </h2>
        <h2>わくせいの仲間たちとの交流を楽しもう</h2>
      </div>
      <h1 className="EveryOneWaiting" id="EveryOneWaiting">
        みんな待ってるよ
      </h1>
      <button
        type="button"
        onClick={GoDiscord}
        class="buttonGoWakusei"
        id="buttonGoWakusei"
      >
        参加する
      </button>
      <Infinity />
    </>
  );
};

export default HomeMain;

//ディスコードリンク https://discord.gg/dm5399cQxS
