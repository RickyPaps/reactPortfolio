import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import htmlIcon from "@iconify/icons-logos/html-5";
import reactIcon from "@iconify/icons-logos/react";
import cssIcon from "@iconify/icons-logos/css-3";
import ionicIcon from "@iconify/icons-logos/ionic";
import "../scss/about.scss";

const About = ({sharedBasicInfo: sharedData, resumeBasicInfo: resumeData}) => {
  const [profilepic, setprofilepic] = useState("");
  const [sectionName, setsectionName] = useState("");
  const [hello, sethello] = useState("");
  const [about, setabout] = useState("");
  useEffect(() => {
    if (sharedData !== undefined) {
      setprofilepic("images/" + sharedData.image);
    }

    if (resumeData !== undefined) {
      setsectionName(resumeData.section_name.about);
      sethello(resumeData.description_header);
      setabout(resumeData.description);
    }
  }, [sharedData, resumeData]);

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img height="250px" src={profilepic} alt="Avatar placeholder" />
                <Icon
                  icon={htmlIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={cssIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={ionicIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
