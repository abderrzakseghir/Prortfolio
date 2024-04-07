import React from "react";
import "./ProjectDetails.css";
import Carousel from "../githubRepoCard/Carousel";

const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="project-modal">
      <div
        className="modal-content"
        style={{
          borderRadius: "12px",
        }}
      >
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="overlay">
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <Carousel images={project.images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
