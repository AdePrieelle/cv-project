import React from "react";

const EducationalExperienceDisplayModeRendering = (props) => {
  return (
    <div className="component">
        <div className="component-header">Education</div>
        <div className="component-props">
          <div className="form-label">School name</div>
          <div className="props-value">{props.inputSchoolName}</div>
          <div className="form-label">Study</div>
          <div className="props-value">{props.inputStudy}</div>
          <div className="form-label">Date of study</div>
          <div className="props-value">{props.inputDateStudy}</div>
        </div>
    </div>
  );
};

export default EducationalExperienceDisplayModeRendering;