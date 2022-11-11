import './Modal.css';

import React from 'react';

const Modal = ({ open, onClose, student }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="header">
          <p className="Perfil">Perfil</p>
          <p className="Cursos">Cursos</p>
          <button className="editar">Editar estudiante</button>
        </div>
        <div className="img">
          <img
            src="/Vectors/studentImg.svg"
            alt="imagen estudiante"
            className="imgEstudiante"
          />
        </div>
        <div>
          <div className="info">
            <span className="userLogo">
              <img src="/Vectors/user.svg" alt="icono usuario" />
            </span>
            <div className="infoEstudiante">
              <p className="titulo">Nombre y apellidos</p>
              <p className="nombre">{student.nombre}</p>
            </div>
          </div>
          <div className="usuario">
            <div className="divUsuarios">
              <p className="titulo">Nombre de usuario</p>
              <p className="nombre">{student.usuario}</p>
            </div>
          </div>
          <div className="usuario">
            <span className="emailLogo">
              <img src="/Vectors/carta.svg" alt="icono usuario" />
            </span>
            <div className="divUsuario">
              <p className="titulo">Email</p>
              <p className="nombre">{student.email}</p>
            </div>
          </div>
          <div className="usuario">
            <span className="movilLogo">
              <img src="/Vectors/movil.svg" alt="icono usuario" />
            </span>
            <div className="divUsuario">
              <p className="titulo">Movil</p>
              <p className="nombre">{student.movil}</p>
            </div>
          </div>
          <div className="usuarioInscripcion">
            <span className="calendarioLogo">
              <img src="/Vectors/calendario.svg" alt="icono usuario" />
            </span>
            <div className="divInscripcion">
              <p className="titulo">Fecha de Inscripcion</p>
              <p className="nombre">{student.inscripcion}</p>
            </div>
          </div>
        </div>

        <button onClick={onClose} className="modalClose">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
