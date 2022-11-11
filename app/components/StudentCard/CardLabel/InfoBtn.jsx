import React from 'react';
import { useState } from 'react';

import Modal from '../../Modales/modalInfo/Modal';

const InfoBtn = (props) => {
  const { student } = props;
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button className="InfoBtn" onClick={() => setOpenModal(true)}>
        <img src="/Vectors/info.svg" alt="icono informacion" className="icono" />
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} student={student} />
    </>
  );
};

export default InfoBtn;
