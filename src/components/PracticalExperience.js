import React from "react";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";
import PracticalExperienceEditModeRendering from "./PracticalExperienceEditModeRendering";
import PracticalExperienceDisplayModeRendering from "./PracticalExperienceDisplayModeRendering";


class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditModeClick = this.handleEditModeClick.bind(this);
    this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);
    this.handleChangeInputCompanyName = this.handleChangeInputCompanyName.bind(this);
    this.handleChangeInputJobTitle = this.handleChangeInputJobTitle.bind(this);
    this.handleChangeInputJobTasks = this.handleChangeInputJobTasks.bind(this);
    this.handleChangeInputJobDate = this.handleChangeInputJobDate.bind(this);
    this.state = {
      isInEditMode: true,
      inputCompanyName: "",
      inputJobTitle: "",
      inputJobTasks: "",
      inputJobDate: "",
    };
  }

  handleEditModeClick() {
    this.setState({isInEditMode: false});
  }

  handleDisplayModeClick() {
    this.setState({isInEditMode: true});
  }

  handleChangeInputCompanyName = (e) => {
    this.setState({
      inputCompanyName: e.target.value,
    });
  };

  handleChangeInputJobTitle = (e) => {
    this.setState({
      inputJobTitle: e.target.value,
    });
  };

  handleChangeInputJobTasks = (e) => {
    this.setState({
      inputJobTasks: e.target.value,
    });
  };

  handleChangeInputJobDate = (e) => {
    this.setState({
      inputJobDate: e.target.value,
    });
  };

  render() {
    const isInEditMode = this.state.isInEditMode;
    let renderingMode;
    let button;
    if (isInEditMode) {
      renderingMode = <PracticalExperienceEditModeRendering 
        handleChangeInputCompanyName={this.handleChangeInputCompanyName} 
        handleChangeInputJobTitle={this.handleChangeInputJobTitle} 
        handleChangeInputJobTasks={this.handleChangeInputJobTasks} 
        handleChangeInputJobDate={this.handleChangeInputJobDate} 
        inputCompanyName={this.state.inputCompanyName} 
        inputJobTitle={this.state.inputJobTitle}
        inputJobTasks={this.state.inputJobTasks}
        inputJobDate={this.state.inputJobDate}
      />
      button = <SubmitButton onClick={this.handleEditModeClick} />
    } else {
      renderingMode = <PracticalExperienceDisplayModeRendering 
        inputCompanyName={this.state.inputCompanyName}
        inputJobTitle={this.state.inputJobTitle}
        inputJobTasks={this.state.inputJobTasks}
        inputJobDate={this.state.inputJobDate}
      />
      button = <EditButton onClick={this.handleDisplayModeClick} />
    }

    return (
      <div>
        {renderingMode}
        {button}
      </div>
    )
  }
}

export default PracticalExperience;
