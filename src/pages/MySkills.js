import React from "react";

const MySkills = () => {
  return (
    <div className="section-padding bg-2" id="skill">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center text-white">My Skills</h2>
          </div>

          <div className="col-sm-7 col-12">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">
                    <h5 className="text-white">程式設計類</h5>
                  </th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-white">-區塊鏈</p>
                  </th>
                  <td>
                    <p className="text-color">solidity, truffle</p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-white">-前端設計</p>
                  </th>
                  <td>
                    <p className="text-color">html, css, javascript, react</p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-white">-後端資料庫</p>
                  </th>
                  <td>
                    <p className="text-color">mongodb</p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-white">-其他工具</p>
                  </th>
                  <td>
                    <p className="text-color">
                      git, node.js, nginx, npm, unity3d
                    </p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-white">-深度學習</p>
                  </th>
                  <td>
                    <p className="text-color">tensorflow, keras, pytorch</p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <p className="text-white">-程式語言</p>
                  </th>
                  <td>
                    <p className="text-color">python, c++, matlab</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-5 col-12">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">
                    <h5 className="text-white">作業系統</h5>
                  </th>
                  <td>
                    <p className="text-color">linux, mac</p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">
                    <h5 className="text-white">多媒體設計類</h5>
                  </th>
                  <td>
                    <p className="text-color">Figma, GIMP</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
