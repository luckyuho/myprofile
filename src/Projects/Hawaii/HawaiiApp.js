import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import logo from "./Icons/black logo.svg";
import hawaiiMountatin from "./Pictures/braden-jarvis-prSogOoFmkw-unsplash.jpg";
import hawaiiBeach from "./Pictures/sean-o-KMn4VEeEPR8-unsplash.jpg";
import surfBoard from "./Pictures/tatonomusic-FFCgotROOTY-unsplash.jpg";
require("./style/style.css");

const HawaiiApp = () => {
  // handle header
  useEffect(() => {
    let themeColor = "#0f9e9e";

    let header = document.querySelector("header");
    let headerAnchor = document.querySelectorAll("header nav ul li a");

    window.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        header.style.backgroundColor = "rgba(0,0,0, 0.5)";
        header.style.color = "white";
        headerAnchor.forEach((a) => {
          a.style.color = "white";
        });
      } else {
        header.style = "";
        headerAnchor.forEach((a) => {
          a.style.color = themeColor;
        });
      }
    });
  });

  function nofunction(e) {
    e.preventDefault();
    alert(
      "Sorry, this element currently has no functionality.\n We will address this later."
    );
  }

  return (
    <div className="hawaii">
      <Helmet>
        <title>{"Hawaii Project"}</title>
      </Helmet>

      <header>
        <div id="home" className="logo">
          <img src={logo} alt="Logo" />
          <h1>夏威夷旅遊租借服務</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a onClick={nofunction} href="#">
                首頁
              </a>
            </li>
            <li>
              <a onClick={nofunction} href="#">
                關於我們
              </a>
            </li>
            <li>
              <a onClick={nofunction} href="#">
                會員登入
              </a>
            </li>
            <li>
              <a onClick={nofunction} href="#">
                聯絡我們
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="backImage">
          <div className="filter">
            <h3>
              準備好享受夏威夷風情了嗎? <br />
              現在準備開始
            </h3>
            <button onClick={nofunction} className="start">
              現在開始
            </button>
          </div>
        </section>

        <section className="second">
          <h2>
            透過給予最好的品質以及服務，我們幫助你獲得最好的 <br />
            <span className="theme">夏威夷旅遊經驗</span>
          </h2>
          <section className="cards">
            <div className="card">
              <div className="image-container">
                <img
                  src={hawaiiMountatin}
                  title="夏威夷群島山脈"
                  alt="picture"
                />
              </div>
              <h4>快速運送</h4>
              <p>
                我們成落在一個工作天之內，送達你所預購的物品。夏威夷群島境內都是用。你放心訂購，我們專業送達！
              </p>
              <a onClick={nofunction} href="#">
                運送地點
              </a>
            </div>

            <div className="card">
              <div className="image-container">
                <img src={hawaiiBeach} title="夏威夷海灘" alt="picture" />
              </div>
              <h4>付款方便</h4>
              <p>
                信用卡、現金卡、現金、銀行轉帳，以及其他熱門付款方式，都可以使用。
              </p>
              <a onClick={nofunction} href="#">
                瞭解更多
              </a>
            </div>

            <div className="card">
              <div className="image-container">
                <img src={surfBoard} title="衝浪板" alt="picture" />
              </div>
              <h4>種類多樣</h4>
              <p>
                超過3000樣商品都可以租借，商品均通過品質篩檢，保證您到的商品絕對滿意。
              </p>
              <a onClick={nofunction} href="#">
                線上搜尋
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default HawaiiApp;

// localStorage practice
// let num = [1, 2, 3];
// localStorage.setItem("num", JSON.stringify(num));

// let num = JSON.parse(localStorage.getItem("num"));
// console.log(num);
