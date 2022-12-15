import React from 'react';
import Student from './student.jsx';


const StudentList = (props) => (
  <div>
  {props.list.map(block =>
      <Student name={block.name} git={block.git} key={block.name}/>
    ) }
  </div>
  )

export default StudentList;