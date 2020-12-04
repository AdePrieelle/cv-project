import React from "react";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";
import GeneralInformationEditModeRendering from "./GeneralInformationEditModeRendering";
import GeneralInformationDisplayModeRendering from "./GeneralInformationDisplayModeRendering";

class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditModeClick = this.handleEditModeClick.bind(this);
    this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);
    this.handleChangeInputName = this.handleChangeInputName.bind(this);
    this.handleChangeInputEmail = this.handleChangeInputEmail.bind(this);
    this.handleChangeInputPhone = this.handleChangeInputPhone.bind(this);
    this.state = {
      isInEditMode: true,
      inputName: "",
      inputEmail: "",
      inputPhone: "",
    };
  }

  handleEditModeClick() {
    this.setState({isInEditMode: false});
  }

  handleDisplayModeClick() {
    this.setState({isInEditMode: true});
  }

  handleChangeInputName = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };

  handleChangeInputEmail = (e) => {
    this.setState({
      inputEmail: e.target.value,
    });
  };

  handleChangeInputPhone = (e) => {
    this.setState({
      inputPhone: e.target.value,
    });
  };

  render() {
    const isInEditMode = this.state.isInEditMode;
    let renderingMode;
    let button;
    if (isInEditMode) {
      renderingMode = <GeneralInformationEditModeRendering 
        handleChangeInputName={this.handleChangeInputName} 
        handleChangeInputEmail={this.handleChangeInputEmail} 
        handleChangeInputPhone={this.handleChangeInputPhone} 
        inputName={this.state.inputName} 
        inputEmail={this.state.inputEmail}
        inputPhone={this.state.inputPhone}
      />
      button = <SubmitButton onClick={this.handleEditModeClick} />
    } else {
      renderingMode = <GeneralInformationDisplayModeRendering 
        inputName={this.state.inputName}
        inputEmail={this.state.inputEmail}
        inputPhone={this.state.inputPhone}
      />
      button = <EditButton onClick={this.handleDisplayModeClick} />
    }

    return (
      <div className="component-item">
        {renderingMode}
        {button}
      </div>
    )
  }
}

export default GeneralInformation;
