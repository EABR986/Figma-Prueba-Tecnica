/* eslint-disable jsx-a11y/alt-text */
import './addEstudiante.css';

import React from 'react';

const AddEstudiante = () => {
  return (
    <>
      <button className="addEstudiante">
        <img className="svgAdd" src="/Vectors/add.svg" />
        Nuevo estudiante
      </button>
    </>
  );
};

export default AddEstudiante;
