import React, { useState } from "react";
import ProjectDetailsModal from "../Modal/ProjectDetailsModal";
import "./projects.scss";

const Projects = ({
  resumeProjects: projectsData,
  resumeBasicInfo: basicInfoData,
}) => {
  const [deps, setDeps] = useState({});

  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const DetailsModalShow = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  const detailsModalClose = () => setDetailsModalShow(false);

  if (projectsData && basicInfoData) {
    var sectionName = basicInfoData.section_name.projects;
    var projects = projectsData.map(function (projects) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={projects.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto" onClick={() => DetailsModalShow(projects)}>
              <div>
                <img
                  src={projects.logo}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{projects.date}</span>
                <br />
                <p className="project-title-settings mt-3">{projects.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          data={deps}
          onHide={detailsModalClose}
        />
      </div>
    </section>
  );
};

export default Projects;
