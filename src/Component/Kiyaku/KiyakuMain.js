import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const KiyakuMain = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => [setScrollY(window.scrollY)];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  if (scrollY >= 200) {
    document
      .getElementById("KiyakuSubTitle")
      .classList.add("KiyakuSubTitle-fadeUp");
  }
  if (scrollY >= 400) {
    document
      .getElementById("KiyakuContent1")
      .classList.add("KiyakuContent1-fadeUp");
  }
  if (scrollY >= 800) {
    document
      .getElementById("KiyakuContent2")
      .classList.add("KiyakuContent2-fadeUp");
  }
  if (scrollY >= 1400) {
    document
      .getElementById("KiyakuContent3")
      .classList.add("KiyakuContent3-fadeUp");
  }
  if (scrollY >= 1800) {
    document
      .getElementById("KiyakuContent4")
      .classList.add("KiyakuContent4-fadeUp");
  }
  if (scrollY >= 2200) {
    document
      .getElementById("KiyakuContent5")
      .classList.add("KiyakuContent5-fadeUp");
  }
  if (scrollY >= 2700) {
    document
      .getElementById("KiyakuContent6")
      .classList.add("KiyakuContent6-fadeUp");
  }
  if (scrollY >= 2900) {
    document.getElementById("ThatAll").classList.add("ThatAll-fadeUp");
  }

  return (
    <>
      <h1 className="KiyakuTitle">サーバー利用キヤク</h1>
      <p className="KiyakuSubTitle" id="KiyakuSubTitle">
        この利用規約（以下、「本規約」といいます。）は、Discordサーバー「わくせい」（以下、「当サーバー」といいます。）がDiscord上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
      </p>
      <div className="KiyakuContent1" id="KiyakuContent1">
        <h2>第1条（適用）</h2>
        <p>
          本規約は、ユーザーと当サーバーとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
          当サーバーは本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
          本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
        </p>
      </div>
      <div className="KiyakuContent2" id="KiyakuContent2">
        <h2>第2条（禁止事項）</h2>
        <p>
          ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
        </p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>
            本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
          </li>
          <li>
            当サーバー、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
          </li>
          <li>当サーバーのサービスの運営を妨害するおそれのある行為</li>
          <li>不正アクセスをし、またはこれを試みる行為</li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>不正な目的を持って本サービスを利用する行為</li>
          <li>
            本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
          </li>
          <li>他のユーザーに成りすます行為</li>
          <li>
            当サーバーが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
          </li>
          <li>面識のない異性との出会いを目的とした行為</li>
          <li>
            当サーバーのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
          </li>
          <li>その他、当サーバーが不適切と判断する行為</li>
        </ul>
      </div>
      <div className="KiyakuContent3" id="KiyakuContent3">
        <h2>第3条（利用制限および登録抹消）</h2>
        <p>
          当サーバーは、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
        </p>
        <ul>
          <li>本規約のいずれかの条項に違反した場合</li>
          <li>当サーバーからの連絡に対し、一定期間返答がない場合</li>
          <li>
            その他、当サーバーが本サービスの利用を適当でないと判断した場合
          </li>
        </ul>
        <p>
          当サーバーは、本条に基づき当サーバーが行った行為によりユーザーに生じた損害について、一切の責任を負いません。
        </p>
      </div>
      <div className="KiyakuContent4" id="KiyakuContent4">
        <h2>第4条（保証の否認および免責事項）</h2>
        <p>
          当サーバーは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          当サーバーは、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
          当サーバーは、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
        </p>
      </div>
      <div className="KiyakuContent5" id="KiyakuContent5">
        <h2>第5条（利用規約の変更）</h2>
        <p>
          当サーバーは以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
        </p>
        <ul>
          <li>本規約の変更がユーザーの一般の利益に適合するとき</li>
          <li>
            本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
          </li>
        </ul>
        <p>
          当サーバーはユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
        </p>
      </div>
      <div className="KiyakuContent6" id="KiyakuContent6">
        <h2>第6条（準拠法）</h2>
        <p>本規約の解釈にあたっては、日本法を準拠法とします。</p>
      </div>
      <p className="ThatAll" id="ThatAll">
        以上
      </p>
      <div className="GoBackHome">
        <Link to="/">Homeに戻る</Link>
      </div>
    </>
  );
};

export default KiyakuMain;