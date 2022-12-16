import React, { Component} from "react";
import StudentList from './studentList.jsx';
import Student from './student.jsx';
import Helpers from './helpers.js';


var App = () => {
  var cohortStudents = Helpers.students;
  var generate = function () {
    var randomName = cohortStudents[Math.floor(Math.random() * cohortStudents.length)];
    return randomName.name;
  }

    return(
      <div className="App">
        <h1> RPP2209 Github </h1>
        <button type="button" onClick={() => {
          alert(generate())
        }}>Random Name Picker</button>
        <div className="classRoom">
          <StudentList list={cohortStudents} link={cohortStudents}/>
        </div>
      </div>
    );
}

export default App;