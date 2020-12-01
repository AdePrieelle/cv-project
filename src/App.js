import React, { Component } from "react";
import Header from "./components/Header"
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import './styles/App.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="components-wrapper">
          <GeneralInformation />
          <EducationalExperience />
          <PracticalExperience />
        </div>
      </div>
    )
  }
}

// Add styling

// use conditional rendering for input or display info


// function App() {
//   return (
//     <div className="App">
//       hi
//     </div>
//   );
// }

export default App;

/*
Think about how to structure your application into components. Your application should include:

    A section to add general information like name, email, phone number.
    A section to add your educational experience (school name, title of study, date of study)
    A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)

*/
