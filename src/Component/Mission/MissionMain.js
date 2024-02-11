import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MissionMain = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => [setScrollY(window.scrollY)];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  if (scrollY >= 200) {
    document
      .getElementById("MissionContent1")
      .classList.add("MissionContent1-fadeUp");
  }
  if (scrollY >= 400) {
    document
      .getElementById("MissionContent2")
      .classList.add("MissionContent2-fadeUp");
  }
  if (scrollY >= 800) {
    document
      .getElementById("MissionContent3")
      .classList.add("MissionContent3-fadeUp");
  }
  if (scrollY >= 1200) {
    document
      .getElementById("MissionContent4")
      .classList.add("MissionContent4-fadeUp");
  }

  return (
    <>
      <h1 className="MissionTitle">わくせいのミッション</h1>
      <div className="MissionContent1" id="MissionContent1">
        <h2>
          わくせいは、カジュアルな話題を中心に活動しているコミュニティですが、
          <br />
          同時に多様性や相互尊重も重要な価値観の一つとして掲げています。
        </h2>
        <h3>
          この星では、日常生活の中での些細な話題から、社会的な問題や時事まで、あらゆるトピックについて
          <br />
          自由に話し合うことができます。しかし、いかなる場合でもお互いを尊重することが求められ、
          <br />
          個人的攻撃や不適切な発言をすることは許容されません。
        </h3>
      </div>
      <div className="MissionContent2" id="MissionContent2">
        <h2>
          わくせいのミッションは、文化的、言語的、宗教的な背景に関係なく、
          <br />
          人々が互いに尊重し、協力することができる
          <br />
          理想的なオンラインコミュニティを構築することです。
        </h2>
        <h3>
          インターネット上でのコミュニケーションは、時に匿名性や距離感の欠如などの要因から、
          <br />
          現実世界では起こりにくいトラブルが生じることがあります。
        </h3>
        <h3>
          例えば、オンラインでの誹謗中傷や嫌がらせが顕著な問題として挙げられます。
          <br />
          匿名性を利用して、自分の本名や素性を隠したまま、他人を攻撃することが出来るため、
          <br />
          特にSNS上での誹謗中傷は深刻な社会問題となっています。
        </h3>
      </div>
      <div className="MissionContent3" id="MissionContent3">
        <h2>
          わくせいは、いかなる形の攻撃や差別も許容しません。
          <br />
          私たちは、全ての人が尊重され、平等に扱われることを信じています。
        </h2>
        <h3>
          わくせいは、人種、性別、性的指向、宗教、年齢、障害の有無などに関わらず、全ての人を歓迎します。私たちは相互尊重と協力によって、より良いコミュニティを作り上げることができます。
          <br />
          全てのメンバーにとって安全な環境を提供するために、私たちは常に努力しています。
        </h3>
        <h3>
          また、この星は誰もが自分らしくいられる場所であり、
          <br />
          誰でも自由に参加することができ、また、脱退することができます。自分に合わなくなったと感じた場合には、いつでも離れることができます。
        </h3>
        <h3>
          何か困ったことや気になることがあればいつでも気軽にお問い合わせ下さい。
        </h3>
        <h3>これから先もわくせいと共にあらんことを。</h3>
      </div>
      <h3 className="MissionContent4" id="MissionContent4">
        May the WAKUSEI be with you …
      </h3>
      <div>
        <Link to="/">Homeに戻る</Link>
      </div>
    </>
  );
};

export default MissionMain;
