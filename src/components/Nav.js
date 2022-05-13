import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-op5 px-5 shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img id="navlogo" src="images/icons/navlogo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarId"
          aria-controls="navbarId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarId" className="col-lg-8 collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactus">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="ms-auto">
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
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
