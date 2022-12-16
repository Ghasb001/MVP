import React from 'react';

const Student = (props) => (
  <div onClick={() => {
    window.open(props.link)
  }}>
    <h5> {props.name}: {props.git} </h5>
  </div>
)

export default Student;