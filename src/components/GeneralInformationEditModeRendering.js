import React from "react";

const GeneralInformationEditModeRendering = (props) => {
  return (
    <div className="component">
        <div className="component-header">General information</div>
        <div className="component-props">
          <div className="label-input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={props.handleChangeInputName} value={props.inputName}></input>
          </div>
          <div className="label-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={props.handleChangeInputEmail} value={props.inputEmail}></input>
          </div>
          <div className="label-input">
            <label htmlFor="phone-number">Phone</label>
            <input type="tel" id="phone-number" onChange={props.handleChangeInputPhone} value={props.inputPhone}></input>
          </div>
        </div>
      </div>
  );
};

export default GeneralInformationEditModeRendering;