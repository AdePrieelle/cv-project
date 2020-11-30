import React from "react";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";
import EducationalExperienceEditModeRendering from "./EducationalExperienceEditModeRendering";
import EducationalExperienceDisplayModeRendering from "./EducationalExperienceDisplayModeRendering";


class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditModeClick = this.handleEditModeClick.bind(this);
    this.handleDisplayModeClick = this.handleDisplayModeClick.bind(this);
    this.handleChangeInputSchoolName = this.handleChangeInputSchoolName.bind(this);
    this.handleChangeInputStudy = this.handleChangeInputStudy.bind(this);
    this.handleChangeInputDateStudy = this.handleChangeInputDateStudy.bind(this);
    this.state = {
      isInEditMode: true,
      inputSchoolName: "",
      inputStudy: "",
      inputDateStudy: "",
    };
  }

  handleEditModeClick() {
    this.setState({isInEditMode: false});
  }

  handleDisplayModeClick() {
    this.setState({isInEditMode: true});
  }

  handleChangeInputSchoolName = (e) => {
    this.setState({
      inputSchoolName: e.target.value,
    });
  };

  handleChangeInputStudy = (e) => {
    this.setState({
      inputStudy: e.target.value,
    });
  };

  handleChangeInputDateStudy = (e) => {
    this.setState({
      inputDateStudy: e.target.value,
    });
  };

  render() {
    const isInEditMode = this.state.isInEditMode;
    let renderingMode;
    let button;
    if (isInEditMode) {
      renderingMode = <EducationalExperienceEditModeRendering 
        handleChangeInputSchoolName={this.handleChangeInputSchoolName} 
        handleChangeInputStudy={this.handleChangeInputStudy} 
        handleChangeInputDateStudy={this.handleChangeInputDateStudy} 
        inputSchoolName={this.state.inputSchoolName} 
        inputStudy={this.state.inputStudy}
        inputDateStudy={this.state.inputDateStudy}
      />
      button = <SubmitButton onClick={this.handleEditModeClick} />
    } else {
      renderingMode = <EducationalExperienceDisplayModeRendering 
        inputSchoolName={this.state.inputSchoolName}
        inputStudy={this.state.inputStudy}
        inputDateStudy={this.state.inputDateStudy}
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

export default EducationalExperience;
