import './Lista.css';

import React from 'react';

import AddEstudiante from '../AddEstudianteBtn/AddEstudiante';
import DivLabel from '../DivLabel/DivLabel';
import StudentCard from '../StudentCard/StudentCard';

const Lista = () => {
  return (
    <>
      <div className="lista">
        <AddEstudiante />
        <DivLabel />
        <StudentCard />
      </div>
    </>
  );
};

export default Lista;
