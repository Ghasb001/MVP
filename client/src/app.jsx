import React, { Component} from "react";
import StudentList from './studentList.jsx';
import Student from './student.jsx';
import Helpers from './helpers.js';


var App = () => {
  var cohortStudents = Helpers.students;
    return(
      <div className="App">
        <h1> RPP2209 Github </h1>
        <div className="col-md-5">
          <StudentList list={cohortStudents} />
        </div>
      </div>
    );
}

export default App;