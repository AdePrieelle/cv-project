import React from "react";

const PracticalExperienceEditModeRendering = (props) => {
  return (
    <div>
        <div className="practical-experience">
          <div className="label-input">
            <label htmlFor="company-name">Company name</label>
            <input type="text" id="company-name" onChange={props.handleChangeInputCompanyName} value={props.inputCompanyName}></input>
          </div>
          <div className="label-input">
            <label htmlFor="job-title">Job title</label>
            <input type="text" id="job-title" onChange={props.handleChangeInputJobTitle} value={props.inputJobTitle}></input>
          </div>
          <div className="label-input">
            <label htmlFor="job-tasks">Job tasks</label>
            <input type="text" id="job-tasks" onChange={props.handleChangeInputJobTasks} value={props.inputJobTasks}></input>
          </div>
          <div className="label-input">
            <label htmlFor="job-date">Job date</label>
            <input type="text" id="job-date" onChange={props.handleChangeInputJobDate} value={props.inputJobDate}></input>
          </div>
        </div>
      </div>
  );
};

export default PracticalExperienceEditModeRendering;