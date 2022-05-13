import React from "react";
import AboutBrief from "../components/AboutBrief";
import AboutDetail from "../components/AboutDetail";

const About = () => {
  return (
    <div className="section-padding bg-1" id="resume">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center text-white">About Me</h2>
          </div>

          <ul
            className="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="px-5 nav-link active"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                Brief
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="px-5 nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Detail
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <AboutBrief />
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <AboutDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
