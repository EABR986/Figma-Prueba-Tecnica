import React from 'react';

const StudentNombreLabel = (props) => {
  const { student } = props;

  return (
    <div className="StudentNombre">
      {student.nombre} {student.apellido}
    </div>
  );
};

export default StudentNombreLabel;
