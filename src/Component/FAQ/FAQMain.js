import React from "react";
import {Link} from "react-router-dom";
import {useState,useEffect} from 'react';

const FAQMain = () =>{

    const[scrollY,setScrollY] = useState(0);

    const handleScroll = () =>[
        setScrollY(window.scrollY)
    ]

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
    },[])

    if(scrollY>=200){
        document.getElementById("question1").classList.add("question1-fadeUp");
    }

    if(scrollY>=600){
        document.getElementById("question2").classList.add("question2-fadeUp");
    }

    if(scrollY>=900){
        document.getElementById("question3").classList.add("question3-fadeUp");
    }

    if(scrollY>=1250){
        document.getElementById("question4").classList.add("question4-fadeUp");
    }

    return(
        <>
        <h1 className="FAQTitle">FAQ</h1>
        <div className="question1" id="question1">
        <h2>1.地方のちがいについて</h2>
        <h3>ここの通話だからゲームきんし！とかおしゃべりきんし！などありませんが下記の指標が目安です。</h3>
        <ul>
            <li className="spanColor">モクモク地方</li>
            <p>モクモク地方は静かな場所です。作業や勉強するのがよいでしょう。</p>
            <li className="spanColor">ノンビリ地方</li>
            <p>ノンビリ地方はおだやかな時間が流れています。のんんびりしたおしゃべりや作業をしながらのおしゃべりがよいでしょう。</p>
            <li className="spanColor">ワイワイ地方</li>
            <p>今日はハジケルゼという日に。ゲームやオンライン飲み会などがひらかれることも。わくせいでのおまつりごとはこのチャンネルできまり！</p>
        </ul>
        </div>
        <div className="question2" id="question2">
            <h2>2.メイシの作り方について</h2>
            <h3>わくせいに参加したらメイシを作ってみよう！おたがいのメイシを見ることで共通のすきなことが発見できるかも！？</h3>
            <ul>
                <li>(1)好きなテキストチャンネルをひらいてコマンド<span className="spanColor">/add</span>を打ってみよう！</li>
                <p>※コマンドは自分しか見えません。他の人からは見れないので気軽にやってみよう！</p>
                <li>(2)コマンドの中にあるそうむ課のマークがついているものをクリック！</li>
                <li>(3)<span className="spanColor">category</span>を出てくるせんたくしから選ぼう！</li>
                <li>(4)categoryを選んだら<span className="spanColor">input</span>の中に具体的なじょうほうを入力しよう！</li>
                <li>(5)1~4をくり返して自分だけのメイシを作ろう！</li>
                <li>(6)作ったメイシは<span className="spanColor">/showme</span>コマンドで見れます！ほかの人のメイシは<span className="spanColor">/lookcard "見たい人の名前"</span>を入力すると見ることができます！</li>
            </ul>
        </div>
        <div className="question3" id="question3">
            <h2>3.各種コマンドについて</h2>
            <h3>実はわくせいにはいろいろなかくしコマンドがあります。</h3>
            <ul>
                <li><span className="spanColor">/cheer "送りたいチャンネル" "送りたい絵文字"</span>を入力するとチャンネルの時空をこえてほかの人をおうえんすることができます！</li>
                <li><span className="spanColor">/showfriend</span>を入力すると今まで通話で話した時間が長い人を見ることができます！</li>
                <li><span className="spanColor">/max "数字"</span>で通話チャンネル部屋の最大人数を変えることができます。(最大10)</li>
                <li><span className="spanColor">!sleep "@人の名前"</span>を入力するとねてしまった方をかみんしつに運ぶことができます！(悪用ダメ)</li>
            </ul>
        </div>
        <div className="question4" id="question4">
            <h2>4.その他お問い合わせについて</h2>
            <h3>わくせいサーバーに行って<span className="spanColor">けいじばん</span>カテゴリの<span className="spanColor">お問い合わせ</span>からお問い合わせください！</h3>
        </div>
        <div><Link to="/">Homeに戻る</Link></div>
        </>
    )
}

export default FAQMain;