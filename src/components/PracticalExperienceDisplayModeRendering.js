import React from "react";

const PracticalExperienceDisplayModeRendering = (props) => {
  return (
    <div>
        <div>Company Name</div>
        <div>{props.inputCompanyName}</div>
        <div>Job title</div>
        <div>{props.inputJobTitle}</div>
        <div>Job tasks</div>
        <div>{props.inputJobTasks}</div>
        <div>Job date</div>
        <div>{props.inputJobDate}</div>
    </div>
  );
};

export default PracticalExperienceDisplayModeRendering;