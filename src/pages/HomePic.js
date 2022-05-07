import React from "react";

const HomePic = () => {
  return (
    <section className="hero" id="home">
      <div className="heroText">
        <h1
          className="text-white mt-5 mb-lg-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          YUHO
        </h1>

        <h5
          className="text-secondary-white-color"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          人生充滿可能性，不斷挑戰，超越自我，活出精彩！
          <div>
            <a href="#skill" className="text-info">
              #區塊鏈
            </a>{" "}
            <a href="#skill" className="text-info">
              #前端設計
            </a>
          </div>
        </h5>
      </div>

      <div className="videoWrapper">
        {/* <video
          autoPlay
          loop
          muted
          className="custom-video"
          poster="videos/homepic.jpg"
        >
          <source src="videos/homevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img className="custom-video" src="videos/bg-developers.jpeg" alt="" />
      </div>

      <div className="overlay"></div>
    </section>
  );
};

export default HomePic;
