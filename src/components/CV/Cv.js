import React from "react";
import { FloatingButton, Item } from "react-floating-button";
import downloadIcon from "../../assets/DOWNLOAD.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import "./cv.scss";

const Cv = () => {
  const viewPdf = async () => {
    window.open(
      "https://drive.google.com/u/0/uc?id=1sXXnxKWD6_o8HzWNUGiWN6NAycz7mJab&export=download"
    );
  };

  const viewLinkedin = async () => {
    window.open("https://www.linkedin.com/in/ricky-papini-427ba0146/");
  };

  return (
    <div id="Cv-nav">
      <FloatingButton right>
        <Item imgSrc={linkedinIcon} onClick={viewLinkedin} />
        <Item imgSrc={downloadIcon} onClick={viewPdf} />
      </FloatingButton>
    </div>
  );
};

export default Cv;
