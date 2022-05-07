import React from "react";

const Introduction = () => {
  return (
    <div className="section-padding pb-0" id="introduction">
      <div className="container mb-5 pb-lg-5">
        <div className="row">
          <div className="col-12">
            <img
              src="images/icons/logo.png"
              alt="logo"
              style={{ height: 80 }}
              data-aos="fade-up"
            />
          </div>

          <div className="col-lg-6 col-12 mt-3 mb-lg-5">
            <p
              className="me-4 text-justify paragraph"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              我熱衷於科技，對於新奇的事物充滿興趣。自研究所後就開始愛上打程式，一路從定位演算法開發，再到深度學習神經網路，而現在對於區塊鏈與前端設計充滿著濃厚的興趣。
            </p>
            <p
              className="me-4 text-justify paragraph"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              近期我花了大量的時間上網自學Udemy及Hahow平台上的課程，使得我從原本只會python、c++等語言，開始學會關於
              <a href="#skill" className="text-success">
                solidity、html、css、javascript
              </a>
              等等，這一路的學習真的很過癮。
            </p>
            <p
              className="me-4 text-justify paragraph"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              以前僅專注於演算法開發，現在則能利用以前演算法的邏輯能力，變成快速學習新知識的工具。
              <a href="#projects" className="text-success">
                現在已能測試與部署智能合約，並為其設計使用者設計介面，令使用者有更好的體驗
              </a>
              ，這一切的一切，有種終於把以往所學的東西串起來的感覺。
            </p>
          </div>

          <div className="col-lg-6 col-12 mt-lg-3 mb-lg-5">
            <p
              className="paragraph text-justify"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              我目前是一位想找關於區塊鏈或前端設計工作的博班生，如果對我有興趣的話，可以看看下面的
              <a className="text-success" href="#about">
                About Me
              </a>
              或是最下面的
              <a
                target="_blank"
                className="text-success"
                href="https://www.linkedin.com/in/yu-ho-tseng-859076164/"
              >
                linkedin
              </a>
              。而在我學習有關區塊鏈及前端設計的課程中，從中學到最多也最推薦的有下面三堂課推薦給大家，分別為：
            </p>
            <ul
              className="list-group list-group-flush"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p>
                <li className="list-group-item">
                  <a
                    target="_blank"
                    className="text-success"
                    href="https://hahow.in/courses/5b3cdd6ed03140001eebeadc/main?item=5b407229bc0cfe001ecd2876"
                  >
                    零基礎邁向區塊鏈工程師:Solidity智能合約
                  </a>{" "}
                  by 西西老師
                </li>
                <li className="list-group-item">
                  <a
                    target="_blank"
                    className="text-success"
                    href="https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/"
                  >
                    Ethereum and Solidity: The Complete Developer's Guide
                  </a>{" "}
                  by Stephen Grider
                </li>
                <li className="list-group-item">
                  <a
                    target="_blank"
                    className="text-success"
                    href="https://www.udemy.com/course/html5-css3-z/"
                  >
                    2022網頁開發全攻略(HTML, CSS, JavaScript, React, SQL, Node,
                    more)
                  </a>{" "}
                  by Wilson Ren
                </li>
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-12 p-0">
            <img
              src="images/introduction/developer.jpeg"
              className="img-fluid about-image"
              alt=""
            />
          </div>

          <div className="col-lg-3 col-12 bg-dark">
            <div className="d-flex flex-column flex-wrap justify-content-center h-100 py-5 px-4 pt-lg-4 pb-lg-0">
              <h3 className="text-white mb-3" data-aos="fade-up">
                研究、挑戰、學習，目的只有一個，就是讓這個世界變得更有趣。
              </h3>

              <div style={{ textAlign: "right" }}>
                <p
                  className="text-secondary-white-color float-right"
                  data-aos="fade-up"
                >
                  - YUHO
                </p>
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

                <div className="carousel-item">
                  <img
                    src="images/introduction/mountain_.jpeg"
                    className="img-fluid team-image"
                    alt=""
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src="images/introduction/service_.jpeg"
                    className="img-fluid team-image"
                    alt=""
                  />
                </div>

                {/* <div className="carousel-item">
                  <img
                    src="images/introduction/chorus_.jpeg"
                    className="img-fluid team-image"
                    alt=""
                  />
                </div> */}

                {/* <div className="carousel-item">
                  <img
                    src="images/introduction/snowboard_.jpeg"
                    className="img-fluid team-image"
                    alt=""
                  />
                </div> */}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>

                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>

                <span className="visually-hidden">Next</span>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
