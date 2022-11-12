import './Modal.css';

import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ open, onClose }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [movil, setMovil] = useState('');
  const [inscripcion, setInscripcion] = useState('');

  const createStudent = (e) => {
    e.preventDefault();
    const estudiante = {
      id: uuidv4(),
      status: 'Offline',
      nombre: nombre,
      apellido: apellido,
      usuario: usuario,
      email: email,
      movil: movil,
      inscripcion: inscripcion,
      cursos: {
        curso01: 0,
        curso02: 0,
        curso03: 0,
        curso04: 0,
        curso05: 0,
      },
    };
    postStudent(estudiante);
  };

  const postStudent = async (item) => {
    axios({
      method: 'POST',
      url: 'http://localhost:3000/estudiantes',
      data: item,
    });
  };
  const allFunctions = (e) => {
    createStudent(e);
    onClose();
    location.reload();
    console.log('hola');
  };

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <button className="add" onClick={(e) => allFunctions(e)}>
          Agregar estudiante
        </button>

        <div className="infoAdd">
          <div className="nombreApellido">
            <div className="nombreDiv">
              <p>Nombre</p>
              <input
                type="text"
                className="nombreInput"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="apellidoDiv">
              <p>Apellidos</p>
              <input
                type="text"
                className="apellido"
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
          </div>
          <div className="nombreUsuarioDiv">
            <p>Nombre de usuario</p>
            <input
              type="text"
              className="nombreUsuario"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="emailDiv">
            <p>Email</p>
            <input
              type="text"
              className="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="movilDiv">
            <p>Móvil</p>
            <input
              type="text"
              className="movil"
              onChange={(e) => setMovil(e.target.value)}
            />
          </div>
          <div className="movilDiv">
            <p>Fecha de inscripcion</p>
            <input
              type="date"
              className="date"
              onChange={(e) => setInscripcion(e.target.value)}
            />
          </div>
        </div>
        <button onClick={onClose} className="modalCloseAdd">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
