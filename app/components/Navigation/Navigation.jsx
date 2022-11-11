/* eslint-disable jsx-a11y/alt-text */
import './Navigation.css';

import React from 'react';

const Navigation = () => {
  return (
    <>
      <nav className="navBar">
        <button className="navDashboard">
          <img className="btnDashboard" src="/Vectors/graph-svgrepo-com.svg" />
          Dashboard
        </button>
        <button className="navAcademia">
          <img className="btnHat" src="/Vectors/graduation-cap-svgrepo-com.svg" />
          Mi Academia
        </button>
        <button className="navEditar">Editar Academia</button>
        <button className="navEstudiantes">Estudiantes</button>
        <button className="navProfesores">Profesores</button>
        <button className="navCursos">
          <img className="btnBook" src="/Vectors/libro.svg" />
          Cursos
        </button>
        <button className="navAjustes">
          <img className="btnSettings" src="/Vectors/setting.svg" />
          Ajustes
        </button>
      </nav>
    </>
  );
};

export default Navigation;
