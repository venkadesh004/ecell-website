import React, { useState } from "react";
import "./HomeContainer.css";

import Bg from "../../images/PageOneBack.png";
import ScrollDown from "../../images/scrollDown.png";

import { PageOne } from "../../Components";

import $ from "jquery";

function HomeContainer() {
  const [update, setUpdate] = useState(true);

  const checkScroll = () => {
    $("body").on("DOMMouseScroll", function (e) {
      console.log("Scrolling");
      setUpdate(false);
    });
  
    $("body").on("mousewheel", function (e) {
      console.log("Scrolling");
      setUpdate(false);
    });
  };

  checkScroll();
  if (update === true) {
    return (
      <div className="HomeContainer">
        <div className="bg">
          <img src={Bg} alt="Background_image_for_Home Page" />
        </div>
        <div className="above">
          <div className="pageone">
            <PageOne />
          </div>
          <div className="end-scroll-down">
            <p>Scroll Down</p>
            <img src={ScrollDown} alt="Scroll Down" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="HomeContainer">
      <div className="bg">
        <img src={Bg} alt="Background_image_for_Home Page" />
      </div>
      <div className="above">
        <div className="pageone">
          <PageOne />
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
