import React from 'react';
import Student from './student.jsx';


const StudentList = (props) => (
  <div>
  {props.list.map(block =>
      <Student studentName={block.studentName} git={block.git} key={block.studentName} gitUrl={block.gitUrl}/>
    ) }
  </div>
  )

export default StudentList;