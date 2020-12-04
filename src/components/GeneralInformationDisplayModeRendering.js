import React from "react";

const GeneralInformationDisplayModeRendering = (props) => {
  return (
    <div className="component">
        <div className="component-header">General information</div>
        <div className="component-props">
          <div className="form-label">Name</div>
          <div className="props-value">{props.inputName}</div>
          <div className="form-label">Email</div>
          <div className="props-value">{props.inputEmail}</div>
          <div className="form-label">Phone</div>
          <div className="props-value">{props.inputPhone}</div>
        </div>
    </div>
  );
};

export default GeneralInformationDisplayModeRendering;
