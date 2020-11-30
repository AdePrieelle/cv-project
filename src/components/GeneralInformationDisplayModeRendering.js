import React from "react";

const GeneralInformationDisplayModeRendering = (props) => {
  return (
    <div>
        <div>Name</div>
        <div>{props.inputName}</div>
        <div>Email</div>
        <div>{props.inputEmail}</div>
        <div>Phone</div>
        <div>{props.inputPhone}</div>
    </div>
  );
};

export default GeneralInformationDisplayModeRendering;