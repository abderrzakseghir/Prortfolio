import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="project-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* hna rigli wch aw hab yjik f window hadik frr */}
      </div>
    </div>
  );
};

export default ProjectDetails;
