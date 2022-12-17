import React from 'react';

const Student = (props) => (
  <div onClick={() => {
    window.open(props.gitUrl)
  }}>
    <h5> {props.studentName}: {props.git} </h5>
  </div>
)

export default Student;