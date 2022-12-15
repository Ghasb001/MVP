import React, { Component} from "react";
import StudentList from './studentList.jsx';
import Student from './student.jsx';



var App = () => {

  var test = [{
    name: 'weeeeeee',
    git: 'Ghasb001',
    link: 'https://github.com/Ghasb001'
  },
  {
    name: 'okuuur',
    git: 'octocat',
    link: 'https://github.com/'
  }
]

    return(
      <div className="App">
        <h1> RPP2209 Github </h1>
        <div className="col-md-5">
          <StudentList list={test} />
        </div>
      </div>
    );
}

export default App;