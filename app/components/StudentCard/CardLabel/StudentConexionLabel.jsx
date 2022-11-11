import React from 'react';

const StudentConexionLabel = (props) => {
  const { student } = props;
  return <div className={`StudentConexion ${student.status}`}>{student.status}</div>;
};

export default StudentConexionLabel;
