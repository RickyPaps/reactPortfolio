import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../../scss/dark-slider.scss";
import { useMediaQuery } from "react-responsive";
import { Modal } from "react-bootstrap";
import "./projectDetailModal.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal = ({ data: dataModal, show: display, onHide }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (Object.keys(dataModal).length > 0) {
    const technologies = dataModal.technologies;
    var title = dataModal.title;
    var description = dataModal.description;
    var url = dataModal.url;

    if (dataModal.images) {
      var img;
      if (isTabletOrMobile) {
        img = dataModal.images[0].mobile.map((elem, i) => {
          return <img alt={"alt-text"} key={i} data-src={elem} />;
        });
      } else {
        img = dataModal.images[0].desktop.map((elem, i) => {
          return <img alt={"alt-text"} key={i} data-src={elem} />;
        });
      }
    }

    if (dataModal.technologies) {
      var tech = technologies.map((icons, i) => {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center">
                <i className={icons.class} style={{ fontSize: "300%" }}>
                  <p className="text-center" style={{ fontSize: "30%" }}>
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }
  }
  return (
    <Modal
      {...dataModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
      show={display}
      onHide={onHide}
    >
      <span onClick={onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {title}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
