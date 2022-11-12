import axios from 'axios';
import { useState } from 'react';
import React from 'react';

const ModalInfo1 = (props) => {
  const { student, setPage } = props;
  const { id, status, nombre, apellido, usuario, email, movil, inscripcion, cursos } =
    student;

  const [nombres, setNombres] = useState(nombre);
  const [apellidos, setApellidos] = useState(apellido);
  const [usuarios, setUsuarios] = useState(usuario);
  const [emails, setEmails] = useState(email);
  const [movils, setMovils] = useState(movil);

  const modificarStudent = (e) => {
    e.preventDefault();
    const estudiante = {
      id: id,
      status: status,
      nombre: nombres,
      apellido: apellidos,
      usuario: usuarios,
      email: emails,
      movil: movils,
      inscripcion: inscripcion,
      cursos: cursos,
    };
    modificar(estudiante);
  };
  const modificar = (item) => {
    axios({
      method: 'PUT',
      url: `http://localhost:3000/estudiantes/${id}`,
      data: item,
    });
  };

  const allFunctions = (e) => {
    modificarStudent(e);
    window.alert('Estudiante modificado');
    location.reload();
    console.log('hola');
  };

  return (
    <>
      {' '}
      <div className="header">
        <button className="Perfil">Perfil</button>
        <button
          className="Cursos"
          onClick={() => {
            setPage(2);
          }}
        >
          Cursos
        </button>
        <button
          className="cancelar"
          onClick={() => {
            setPage(0);
          }}
        >
          Cancelar edición
        </button>
        <button className="guardar" onClick={(e) => allFunctions(e)}>
          Guardar
        </button>
      </div>
      <div className="infoAdd">
        <div className="nombreApellido">
          <div className="nombreDiv">
            <p>Nombre</p>
            <input
              placeholder={nombre}
              type="text"
              className="nombreInput"
              onChange={(e) => setNombres(e.target.value)}
            />
          </div>
          <div className="apellidoDiv">
            <p>Apellidos</p>
            <input
              placeholder={apellido}
              type="text"
              className="apellido"
              onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
        </div>
        <div className="nombreUsuarioDiv">
          <p>Nombre de usuario</p>
          <input
            placeholder={usuario}
            type="text"
            className="nombreUsuario"
            onChange={(e) => setUsuarios(e.target.value)}
          />
        </div>
        <div className="emailDiv">
          <p>Email</p>
          <input
            placeholder={email}
            type="text"
            className="email"
            onChange={(e) => setEmails(e.target.value)}
          />
        </div>
        <div className="movilDivEdit">
          <p>Móvil</p>
          <input
            placeholder={movil}
            type="text"
            className="movil"
            onChange={(e) => setMovils(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default ModalInfo1;
