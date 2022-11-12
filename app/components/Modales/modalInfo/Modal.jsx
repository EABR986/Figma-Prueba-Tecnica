import './Modal.css';

import React from 'react';
import { useState } from 'react';

import ModalInfo0 from './ModalInfo0/ModalInfo0';
import ModalInfo1 from './ModalInfo1/ModalInfo1';
import ModalInfo2 from './ModalInfo2/ModalInfo2';

const Modal = ({ open, onClose, student }) => {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <ModalInfo0 student={student} setPage={setPage} />;
    } else if (page === 1) {
      return <ModalInfo1 student={student} setPage={setPage} />;
    } else if (page === 2) {
      return <ModalInfo2 student={student} setPage={setPage} />;
    }
  };

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        {PageDisplay()}

        <button onClick={onClose} className="modalClose">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
