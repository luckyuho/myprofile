import React from "react";

const Introduction = () => {
  return (
    <div className="section-padding pb-0 bg-1" id="about">
      <div className="container mb-5" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center text-white">Know Me More</h2>
          </div>
          <div className="col-12 pb-3">
            <img
              src="images/icons/navlogo.png"
              alt="logo"
              style={{ height: 45 }}
            />
          </div>

          <div className="col-sm-7 col-12 mt-3">
            <h5 className="me-4 paragraph text-white">
              I'm <strong className="theme-color">YUHO</strong>, a Blockchain &
              Web Developer
            </h5>
            <p className="me-4 text-justify text-color">
              我可以幫你測試與部署智能合約，也可以設計web3的前端網頁。我已完成過幾個作品，曾利用remix與javascript部署solidity的智能合約，在測試合約方面則使用過ganache與rinkeby作為測試環境。
            </p>
            <p className="me-4 text-justify text-color">
              利用React設計web3的前端網頁，亦有使用mongodb作為資料管理的經驗，可看看下面的作品
              ，如果對我有興趣， 歡迎與我聯絡 。
            </p>
          </div>

          <div className="col-sm-5 col-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-1 border-bottom border-secondary">
                <p className="text-white">
                  <strong>Name</strong>: 曾于和 / YUHO
                </p>
              </li>
              <li className="list-group-item bg-1 border-bottom border-secondary">
                <p className="text-white">
                  <strong>Email</strong>:{" "}
                  <a
                    href="mailto:gsn915315@gmail.com?subject=YUHO%20個人網站&body="
                    className="theme-color"
                  >
                    gsn915315@gmail.com
                  </a>
                </p>
              </li>
              <li className="list-group-item bg-1 border-bottom border-secondary">
                <p className="text-white">
                  <strong>Age</strong>: 30
                </p>
              </li>
              <li className="list-group-item bg-1">
                <p className="text-white">
                  <strong>From</strong>: Tainan, Taiwan
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-3" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-12 p-0">
            <img
              src="images/introduction/developer.jpeg"
              className="img-fluid about-image"
              alt=""
            />
          </div>

          <div className="col-lg-3 col-12 bg-black">
            <div className="d-flex flex-column flex-wrap justify-content-center h-100 py-5 px-4 pt-lg-4 pb-lg-0">
              <h3 className="text-white mb-3">
                研究、挑戰、學習，目的只有一個，就是讓這個世界變得更有趣。
              </h3>

              <div style={{ textAlign: "right" }}>
                <p className="text-secondary-white-color float-right">- YUHO</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 p-0">
            <section
              id="myCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="images/introduction/presentation_.jpeg"
                    className="img-fluid team-image"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
