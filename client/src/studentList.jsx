import React from 'react';
import Student from './student.jsx';


const StudentList = (props) => (
  <div>
  {props.list.map(block =>
      <Student name={block.name} git={block.git} key={block.name} link={block.link}/>
    ) }
  </div>
  )

export default StudentList;