import React from 'react';

const StudentList = (props) => (
  <div>
    <h4> Student List </h4>
    Student: {props.student.name}
    {props.repos.map((repo, id) => <h4 onClick={() => {
        window.open(repo.url);
      }} key={repo.url + id}>{repo.name}</h4>)}
  </div>
)

export default RepoList;