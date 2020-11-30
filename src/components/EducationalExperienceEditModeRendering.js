import React from "react";

const EducationalExperienceEditModeRendering = (props) => {
  return (
    <div>
        <div className="educational-experience">
          <div className="label-input">
            <label htmlFor="school-name">School name</label>
            <input type="text" id="school-name" onChange={props.handleChangeInputSchoolName} value={props.inputSchoolName}></input>
          </div>
          <div className="label-input">
            <label htmlFor="study">Study</label>
            <input type="text" id="study" onChange={props.handleChangeInputStudy} value={props.inputStudy}></input>
          </div>
          <div className="label-input">
            <label htmlFor="date-study">Date of study</label>
            <input type="text" id="date-study" onChange={props.handleChangeInputDateStudy} value={props.inputDateStudy}></input>
          </div>
        </div>
      </div>
  );
};

export default EducationalExperienceEditModeRendering;