import React from "react";
import Typed from "react-typed";

const HomePic = () => {
  return (
    <section className="hero" id="home">
      <div className="heroText">
        <h5 className="text-white" data-aos="zoom-in">
          Welcome
        </h5>
        <h1 id="homepictitle" className="text-white mb-lg-4" data-aos="zoom-in">
          I'm{" "}
          <Typed
            strings={["YUHO.", "區塊鏈工程師.", "前端設計師."]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </h1>

        <div id="react-root"></div>

        <p
          id="homepic-p"
          className="text-secondary-white-color"
          data-aos="zoom-in"
        >
          人生充滿可能性，不斷挑戰，超越自我，活出精彩！
        </p>
        <br />
        <a href="#contactus" data-aos="zoom-in">
          <button
            type="button"
            className="btn btn-outline-success btn-custom-lg"
          >
            Hire Me
          </button>
        </a>
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
        <img
          className="custom-video"
          src="videos/bg-developers-guassian.jpeg"
          alt=""
        />
      </div>

      <div className="overlay"></div>
    </section>
  );
};

export default HomePic;
