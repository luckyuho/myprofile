import React from "react";

const AboutBrief = () => {
  return (
    // <div className="container">
    <div className="row">
      <div className="col-sm-6 pt-4 pe-3">
        <h5 className="text-white">My Education</h5>

        <div className="row">
          <div className="py-2">
            <div className="card text-white bg-black">
              <div className="card-body">
                <p>
                  <span className="px-2 py-1 bg-warning text-dark cards-date">
                    2021 - <strong>present</strong>
                  </span>
                </p>
                <h6 className="card-title text-white">Phd student</h6>
                <p className="text-success">國立成功大學(NCKU)</p>
                <p className="card-text">學習有關區塊鏈與前端設計</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="card text-white bg-black ">
              <div className="card-body">
                <p>
                  <span className="px-2 py-1 bg-warning text-dark cards-date">
                    2015 - 2018
                  </span>
                </p>
                <h6 className="card-title text-white">Master's degree</h6>
                <p className="text-success">國立成功大學(NCKU)</p>
                <p className="card-text">
                  發表電腦視覺與深度學習相關paper於IEEE/PLANS
                  <br />
                  <a href="https://ieeexplore.ieee.org/document/8373485">
                    paper連結
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="card text-white bg-black">
              <div className="card-body">
                <p>
                  <span className="px-2 py-1 bg-warning text-dark cards-date">
                    2012 - 2015
                  </span>
                </p>
                <h6 className="card-title text-white">Bachelor's degree</h6>
                <p className="text-success">國立成功大學(NCKU)</p>
                <p className="card-text">
                  學習機械與飛機相關知識，總班級排名16/58。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 pt-4 pe-3">
        <h5 className="text-white">My Experience</h5>

        <div className="row">
          <div className="py-2">
            <div className="card text-white bg-black ">
              <div className="card-body">
                <p>
                  <span className="px-2 py-1 bg-warning text-dark cards-date">
                    2021 - 2022
                  </span>
                </p>
                <h6 className="card-title text-white">Intern程式設計師</h6>
                <p className="text-success">
                  Owl Technologies Inc./
                  <a href="https://www.owl3d.ai/">官網連結</a>
                </p>
                <p className="card-text">
                  利用kotlin設計Android App
                  <br />
                  影像修補(Video Inpainting)
                </p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="card text-white bg-black ">
              <div className="card-body">
                <p>
                  <span className="px-2 py-1 bg-warning text-dark cards-date">
                    2019 - 2021
                  </span>
                </p>
                <h6 className="card-title text-white">軟體設計工程師</h6>
                <p className="text-success">國家中山科學研究院</p>
                <p className="card-text">學習完整的飛彈開發流程並移植程式碼</p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="card text-white bg-black ">
              <div className="card-body">
                <p>
                  <span className="px-2 py-1 bg-warning text-dark cards-date">
                    2016 - 2018
                  </span>
                </p>
                <h6 className="card-title text-white">研究助理</h6>
                <p className="text-success">漢翔股份有限公司</p>
                <p className="card-text">開發高教機的某部分演算法</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutBrief;
