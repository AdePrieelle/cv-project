import React from "react";

const PracticalExperienceDisplayModeRendering = (props) => {
  return (
    <div className="component">
        <div className="component-header">Work Experience</div>
        <div className="component-props">
          <div className="form-label">Company Name</div>
          <div className="props-value">{props.inputCompanyName}</div>
          <div className="form-label">Job title</div>
          <div className="props-value">{props.inputJobTitle}</div>
          <div className="form-label">Job tasks</div>
          <div className="props-value">{props.inputJobTasks}</div>
          <div className="form-label">Job date</div>
          <div className="props-value">{props.inputJobDate}</div>
        </div>
    </div>
  );
};

export default PracticalExperienceDisplayModeRendering;
