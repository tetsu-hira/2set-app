import React from 'react';

const About = () => {
  return (
    <div className="About">
      <div className="AboutContainer">
        <h1>2setMatchの説明書</h1>
        <ol>
          <li className="title">＜計算シートの作成方法＞</li>
          <li>左サイドバーの入力欄に作成したい計算シートの名前を入力する</li>
          <li>入力欄下の『Create』をクリック</li>
          <li>
            『Category-List』の下に作成した計算シート名前が作成されます
            <p>※計算シートは何個でも作成することができます</p>
          </li>
          <li>
            リストに表示されたシート名をクリックすると計算シートの中身が表示されます
          </li>
          <li className="title">＜チームの登録方法＞</li>
          <li>『参加するチームを入力』の欄にチーム名を入力します</li>
          <li>
            入力欄の横にある『Entry』をクリックすると下にチームが登録されていきます
            <p>※参加チームは何個でも登録することができます</p>
          </li>
          <li className="title">＜勝ち点の登録方法＞</li>
          <li>
            参加チームの横にある『WW』・『DW』・『DD』・『DL』に勝ち点を入力していきます
          </li>
          <li>『WW』　2-0で勝ったチームの勝ち点を入力します</li>
          <li>『DW』　1-1で合計点数が多かったチームの勝ち点を入力します</li>
          <li>『DD』　1-1で合計点数が同じだった場合の勝ち点を入力します</li>
          <li>『DL』　1-1で合計点数が少なかったチームの勝ち点を入力します</li>
          <li className="title">＜対戦結果の登録方法＞</li>
          <li>登録したいチームのチーム名の横にある↓ボタンをクリックします</li>
          <li>
            チームリストの下に対戦表が作成されますので結果を入力していきます
          </li>
          <li>『＋』ボタン　点数が＋５点されます</li>
          <li>『ー』ボタン　点数が－１点されます</li>
          <li>『Del』ボタン　間違えた場合に結果を削除することができます</li>
          <li>点数が入力されていくとそれに従って全体結果が更新されます</li>
          <li className="title">＜試合結果の見方＞</li>
          <li>『point』　チームが獲得した合計勝ち点です</li>
          <li>『score』　チームの得失点差です</li>
          <li>『times』　チームの対戦回数です</li>
          <li>『count』　※工事中です</li>
          <li>『ratio』　※工事中です</li>
          <li className="title">＜注意事項＞</li>
          <li>
            サイトをリロード（再読み込み）するとデータが全てリセットされます
          </li>
          <li>順位順に並び変える機能はありません（※次回実装予定）</li>
          <li>登録したチームは消すことができません</li>
        </ol>
      </div>
    </div>
  );
};

export default About;
