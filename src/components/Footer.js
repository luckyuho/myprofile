import React from "react";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="text-white">
              <i className="bi-geo-alt-fill me-2"></i>
              Taiwan
            </h5>
          </div>

          <div className="col-7">
            <p className="mt-2">Design: YUHO</p>
            <p className="mt-2">Copyright © YUHO 2022 </p>
            {/* <p>
              Template from:
              <a
                href="https://themewagon.com/themes/nomad-force-free-bootstrap-5-html5-landing-page-template/"
                target="_blank"
              >
                ThemeWagon, TemplateMo, Nomad Force 2021
              </a>
            </p> */}
          </div>

          <div className="col-lg-2 col-2 ms-auto">
            <ul className="social-icon">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/yu-ho-tseng-859076164/"
                  className="social-icon-link bi-linkedin"
                ></a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://github.com/luckyuho"
                  className="social-icon-link bi-github"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
