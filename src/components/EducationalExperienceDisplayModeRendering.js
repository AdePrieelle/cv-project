import React from "react";

const EducationalExperienceDisplayModeRendering = (props) => {
  return (
    <div>
        <div>School name</div>
        <div>{props.inputSchoolName}</div>
        <div>Study</div>
        <div>{props.inputStudy}</div>
        <div>Date of study</div>
        <div>{props.inputDateStudy}</div>
    </div>
  );
};

export default EducationalExperienceDisplayModeRendering;