import React from 'react';

const StudentMovil = (props) => {
  const { student } = props;
  return <div className="StudentMovil">{student.movil}</div>;
};

export default StudentMovil;
