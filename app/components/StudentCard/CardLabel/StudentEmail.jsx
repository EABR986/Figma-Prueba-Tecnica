import React from 'react';

const StudentEmail = (props) => {
  const { student } = props;
  return <div className="StudentEmail">{student.email} </div>;
};

export default StudentEmail;
