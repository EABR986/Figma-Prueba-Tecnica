/* eslint-disable jsx-a11y/alt-text */
import './addEstudiante.css';

import React from 'react';
import { useState } from 'react';

import Modal from '../Modales/modalAdd/Modal';

const AddEstudiante = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className="addEstudiante" onClick={() => setOpenModal(true)}>
        <img className="svgAdd" src="/Vectors/add.svg" />
        Nuevo estudiante
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default AddEstudiante;
