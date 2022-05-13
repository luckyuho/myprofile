import React from "react";

const AboutDetail = () => {
  return (
    <div className="row">
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th scope="row">
              <h3 className="text-white about-title">Work Experience</h3>
            </th>
            <td className="align-right">
              <img className="about-img" src="images/about/owl3d.png" alt="" />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">
              <p className="text-color">2021 - 2022</p>
            </th>
            <td>
              <h6 className="text-white">
                Intern程式設計師 /{" "}
                <a
                  target="_blank"
                  href="https://www.owl3d.ai/"
                  className="text-success"
                >
                  Owl Technologies Inc.
                </a>
              </h6>
              <p className="text-justify text-color">
                這是一個我在讀博班時非常特別的經驗，在一間只有三人的新創小公司裡面，彼此身在不同國家，以遠端作業討論及確認進度，並且多是與資工相關作業的內容，對於身為以往都是演算法開發的我來說充滿了許多的挑戰。OWL3D這間公司主要是將2D的圖片及影片轉換成3D的結果，而我在裡面完成的工作主要有兩個，第一個工作是利用kotlin開發Android的App，其結果可以看下面My
                Projects中的
                <a href="#owl3dproject" className="text-success">
                  Kotlin App開發
                </a>
                。第二個工作則是關於2D轉3D時，等於是多了一個維度，就表示其中勢必須要額外補充其他資訊才能完成。需額外補充的資訊基本上可分為兩個部分，第一部分是預測深度資訊，第二部分則是透過預測的深度資訊後，需要補足不同深度間缺失的資訊，因此引入inpainting的技術，才能使畫面看起來完整，而inpainting這部分便是我負責的工作。
              </p>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">
              <p className="text-color">2019 - 2021</p>
            </th>
            <td>
              <h6 className="text-white">
                軟體設計工程師 / 國家中山科學研究院
              </h6>
              <p className="text-justify text-color">
                這是我研究所畢業與當兵後找的第一份工作，在裡面我才真的了解到目前國家軍武研發的整個過程。在裡面主要是學習飛彈控制的相關知識與研發及製作飛彈的流程，收集真實飛彈資料並加以分析，還有將開發用的Fortran程式碼改成比較容易閱讀架構的Matlab
                Simulink模塊式程式碼。雖然在轉換程式碼的部分看似一份簡單的工作，但是由於以前的Fortran程式碼為了高效工作，因此編寫的內容十分不容易閱讀，也難以傳承給新人，因此為了要轉成易讀的程式碼，就必須了解飛彈全部的流程及相關知識，在轉移程式碼的期間也剛好找到一個以往Fortran編寫習慣不好導致不易發現的一個bug，也是有點成就感，更深深的體悟程式碼編寫易讀的重要性。
              </p>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row">
              <h3 className="text-white about-title">Education</h3>
            </th>
            <td className="align-right">
              <img
                className="about-img"
                src="images/about/certificate.png"
                alt=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">
              <p className="text-color">
                2021 - <b className="text-white">Present</b>
              </p>
            </th>
            <td>
              <h6 className="text-white">
                PhD student / 國立成功大學航太所控制組
              </h6>
              <p className="text-justify text-color">
                透過中科院的經歷，決定重新審視自己的未來，也恰逢之前研究所的教授問詢讀博的意願，因此毅然決然的決定辭職中科院，並打算藉由教授的眼界與學校的課程重新規劃。在就學期間有幸聯絡到一個很厲害的人，也是
                <a
                  target="_blank"
                  href="https://www.owl3d.ai/"
                  className="text-success"
                >
                  Owl Technologies Inc.
                </a>
                的創辦人，做了一些與深度學習有關的工作，此外也因為這份工作修了學校資工所碩班的"電腦視覺與深度學習"課程，並且在這堂課程中獲得了96分的好成績，也對於機器視覺與深度學習有更近一步的了解。此外，也因為與
                <a
                  target="_blank"
                  href="https://www.owl3d.ai/"
                  className="text-success"
                >
                  Owl Technologies Inc.
                </a>
                創辦人工作的機會，接觸到了區塊鏈與前端設計等知識，因此開始了一路的區塊鏈與前段設計的學習之旅。由於學校並無開設太多的相關課程，因此學習的管道皆是透過線上學習，主要為Udemy與Hahow兩個平台，目前修習幾門關於區塊鏈與前端設計的課程，總學習時間已超過120個小時，也在學習過程中作了一些作品，成果可參考
                <a href="#projects" className="text-success">
                  My Projects
                </a>
                中的作品。
              </p>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">
              <p className="text-color">2015 - 2017</p>
            </th>
            <td>
              <h6 className="text-white">
                master's degree / 國立成功大學航太所控制組
              </h6>
              <p className="text-justify text-color">
                在研究所的學習過程中，主要做了兩件事，第一件事是與漢翔合作開發高教機的某部分演算法，使用C++作為開發語言，透過搜索大量文獻，其中不斷的與漢翔開發人員討論，來回測試確認，終於在最後將成品完成並使用在目前的高教機上面，也是在過程中熟練C++及對於專案開發的溝通能力。第二件事則是畢業論文，當時自己找了一個覺得有趣的主題，主要是關於自駕車的機器視覺辨識系統，最後利用深度網絡將其完成。值得一提的是，以當時2015年，台灣對於深度學的認知才剛剛起步，學校並未開設相關課程，也不像如今有大量可參考的資料，因此也是從那時開始接觸線上課程，當時修習的第一門課程便是Standford,
                Andrew
                Ng在Coursera所開設的機器學習課程，也是因為這門課程才讓我對深度學習有了基本的認識。後面透過不斷的大量參照paper及程式碼並自己編寫到最終的測試，才完成了一篇發布在
                <a
                  target="_blank"
                  href="https://ieeexplore.ieee.org/document/8373485#citations"
                  className="text-success"
                >
                  IEEE的一篇paper: Combination of computer vision detection and
                  segmentation for autonomous driving
                </a>
                ，並且榮幸地參與辦在Monterey, USA的2018 IEEE/ION
                PLANS的研討會，也算是解了一個小小的人生成就。
              </p>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">
              <p className="text-color">2012 - 2015</p>
            </th>
            <td>
              <h6 className="text-white">
                bachelor's degree / 國立成功大學航太系
              </h6>
              <p className="text-justify text-color">
                在大學時期，知識學習的層面主要與機械有關，如控制、靜力、動力、材力、熱力、流力、氣動力、電磁學、微積分與工程數學等，比較特別與飛機有關的課程則為飛機設計、航空發電機與飛行力學等課程，最終的班級排名為16/58，也算是有學到一些基本知識。而課外活動倒也參加了不少，比方有社會服務隊，這個社團主要是去偏鄉學校陪伴小朋友，藉著辦營隊的方式和他們交流，我也從參與社團的經歷一步步從社團的小隊員一路做到總負責人，從與校方接洽及安排活動流程及內容到最後的完美的舉辦營隊，最後不僅除了與小朋友的關係極好，甚至連與校長的關係也很不錯，我離開社團之後，社團也常與該校有合作關係。另外一個社團則是合唱團，因為在社團博覽會時，聽到那美麗的合聲而突然產生了觸動，便毅然決然的加入該社團，參與了各縣市大大小小的表演與比賽，從在上台的怯場，透過不斷的練習，慢慢轉變為享受舞台的心情，而在此其中我也從小小的社員晉身為男高音的leader，從原本學習者變成教導者，能回饋社團也是十分榮幸。
              </p>
            </td>
          </tr>
        </tbody>

        <tbody id="skill">
          <tr>
            <th scope="row">
              <h3 className="text-white about-title">Skills & Knowledge</h3>
            </th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">
              <p className="text-white">Skills</p>
            </th>
            <td>
              <p className="text-justify text-color">
                Solidity, Truffle, Html, Css, Javascript, React, Git, Mongodb,
                Node.js Python, C++, Unity3D, Matlab, Linux, Tensorflow, Keras,
                Pytorch
              </p>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">
              <p className="text-white">Knowledge</p>
            </th>
            <td>
              <p className="text-justify text-color">
                Web3, Block chain, Smart contract, Front-end, Machine learning,
                Deep learning, Computer vision
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AboutDetail;
