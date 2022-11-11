import React from 'react';

const StudentUsuario = (props) => {
  const { student } = props;
  return <div className="StudentUsuario">{student.usuario}</div>;
};

export default StudentUsuario;
