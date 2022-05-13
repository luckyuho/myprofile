import React from "react";

const Projects = () => {
  return (
    <div className="section-padding bg-2" id="projects">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center text-white">My Work</h2>
          </div>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                href="https://github.com/luckyuho/EthereumProject/tree/main/kickstart#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/kickstarter.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">募資平台 - 區塊鏈</h5>

                <p className="text-justify text-color">
                  這是發布在Rinkeby測試鏈上的區塊鏈募資平台，使用React作為前端網頁設計。公司可在上面發起募資活動，投資者可決定是否支持該內容，一旦支持的投資者佔總投資者的數量過半，公司可將活動提出的固定募資金額轉給廠商，使募資活動公開透明。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    href="https://github.com/luckyuho/EthereumProject/tree/main/kickstart#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">April 27, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                href="https://github.com/luckyuho/EthereumProject/tree/main/lottery-react#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/lottery.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">獎金池 - 區塊鏈</h5>

                <p className="text-justify text-color">
                  這是發布在Rinkeby測試鏈上的區塊鏈小遊戲，使用React作為前端網頁設計。參與者必須投入固定的參加金，透過看似隨機的亂數產生方法，決定最後誰是贏家，贏家可將大家投入獎金池的獎金全數取回。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    href="https://github.com/luckyuho/EthereumProject/tree/main/lottery-react#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">April 20, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                href="https://hahow.in/creations/622a0586499fda0007fdee42"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/RPS.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">猜拳遊戲 - 區塊鏈</h5>

                <p className="text-justify text-color">
                  這是發佈在Rinkeby測試鏈上的區塊鏈小遊戲。依照ERC20的協議標準所佈的合約，其中透過Oraclize的API來產生亂數。玩家可在合約透過輸入不同的數字對應出拳，再進行最後的勝負判斷。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    href="https://hahow.in/creations/622a0586499fda0007fdee42"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">March 10, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* ===== ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                href="#home"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/profile.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">個人網頁設計 - 前端設計</h5>

                <p className="text-justify text-color">
                  我的個人介紹網站，同時也是在學習前端設計時給自己的作業，透過網路參考一些範例，大架構是
                  <a
                    href="https://themewagon.com/themes/nomad-force-free-bootstrap-5-html5-landing-page-template/"
                    target="_blank"
                    className="text-success"
                  >
                    Nomad Force 2021
                  </a>
                  ，再改成React的語法，並稍做些改變，同時也學習AOS與bootstrap
                  5並善加利用，作為一個檢定，同時也是一個完整的作品。
                </p>
                <p className="text-color">
                  <a
                    href="#home"
                    className="news-image-hover news-image-hover-warning text-success"
                  >
                    看看作品
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">May 05, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                href="https://github.com/luckyuho/UdemyWebCourseProject/tree/main/Project7_MERN#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/mern.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">MERN - 前端＆後端設計</h5>

                <p className="text-justify text-color">
                  這是一個類似Udemy或Hahow的教學平台，可註冊老師或學生的身份。利用Mongodb作為資料儲存的伺服器，使用React作為前端網頁設計。老師可在上面開設課程與附註課程內容及金額，學生則可搜尋課程並選擇註冊課程。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    href="https://github.com/luckyuho/UdemyWebCourseProject/tree/main/Project7_MERN#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">April 15, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* ===== ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                href="/projects/photowebsite"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/photowebsite.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">圖片庫 - 前端設計</h5>

                <p className="text-justify text-color">
                  這是一個圖片搜尋網頁。透過Pexels提供的API，可瀏覽pexels的圖片以及搜尋有興趣的主題，每次顯示15個圖片，如果想看更多，可點擊下方的Load
                  more來取得更多圖片。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    href="/projects/photowebsite"
                    className="news-image-hover news-image-hover-warning text-success"
                  >
                    看看作品
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">April 04, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* ===== ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                href="/projects/todolist"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/todolist.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">TodoList - 前端設計</h5>

                <p className="text-justify text-color">
                  這是一個可離線的網頁待辦清單App。透過網頁的local
                  storage儲存清單，除了新增清單以外，也可標記完成與刪除，此外如果需要，可透過Sort
                  By Time的按鈕依照時間排序。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    href="/projects/todolist"
                    className="news-image-hover news-image-hover-warning text-success"
                  >
                    看看作品
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">March 22, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* ===== ===== */}
          <section className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                href="/projects/hawaii"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/webDesign.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">基礎網頁設計 - 前端設計</h5>

                <p className="text-justify text-color">
                  網頁設計，也是我踏入網頁設計的第一個作品，主要運用了html設計、css排版，以及使用了一點基礎的javascript，根據滑動的位置，導覽列會變成其他的顏色，還有將鼠標移置圖片上會有放大的效果，很有意思。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    href="/projects/hawaii"
                    className="news-image-hover news-image-hover-warning text-success"
                  >
                    看看作品
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">March 19, 2022</p>
                </span>
              </div>
            </div>
            <br />
          </section>

          {/* =====  ===== */}
          <section id="owl3dproject" className="col-lg-4 col-12 mb-5 mb-lg-0">
            <div className="news-thumb">
              <a
                target="_blank"
                href="https://github.com/luckyuho/OWL3D#readme"
                className="news-image-hover news-image-hover-warning"
              >
                <img
                  src="images/projectSmallPic/kotlinApp.png"
                  className="img-fluid large-news-image news-image border-radius-5"
                  alt="basic web design"
                  title="basic web design"
                />
              </a>

              <div className="news-text-info">
                <h5 className="text-white">Kotlin App - 前端設計</h5>

                <p className="text-justify text-color">
                  在MVVM架構下，利用kotlin開發的Android
                  App，透過Retrofit2連接資料庫的API，並利用Paging3將資料顯示於畫面中，此外可透過Room將喜愛的項目存在離線暫存區。
                </p>
                <p className="text-color">
                  <a
                    target="_blank"
                    href="https://github.com/luckyuho/OWL3D#readme"
                    className="news-image-hover news-image-hover-warning text-primary"
                  >
                    查看更多
                  </a>
                </p>
                <span className="text-muted">
                  <p className="text-color">Oct 07, 2021</p>
                </span>
              </div>
            </div>
            <br />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
