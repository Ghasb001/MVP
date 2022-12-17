import React, { Component} from "react";
import StudentList from './studentList.jsx';
import Student from './student.jsx';
import Helpers from './helpers.js';


var App = () => {
  var cohortStudents = Helpers.students;
  var generate = function () {
    var randomName = cohortStudents[Math.floor(Math.random() * cohortStudents.length)];
    return randomName.studentName;
  }

    return(
      <div className="App">
        <h1> RPP2209 Github </h1>
        <button type="button" onClick={() => {
          alert(generate())
        }}>Random Name Picker</button>
        <button type="button" onClick={() => {
          window.open('https://github.com/orgs/hackreactor/teams/students-rpp2209/repositories')
        }}>Cohort Repos</button>
        <div className="classRoom">
          <StudentList list={cohortStudents} url={cohortStudents}/>
        </div>
      </div>
    );
}

export default App;