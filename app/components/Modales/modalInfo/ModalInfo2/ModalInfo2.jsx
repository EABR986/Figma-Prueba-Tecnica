import React from 'react';

const ModalInfo2 = (props) => {
  const { student, setPage } = props;
  const { cursos, inscripcion } = student;

  return (
    <>
      <div className="headerNew">
        <button
          className="PerfilCursos"
          onClick={() => {
            setPage(0);
          }}
        >
          Perfil
        </button>
        <button
          className="Curso"
          onClick={() => {
            setPage(2);
          }}
        >
          Cursos
        </button>
      </div>
      <div className="progress">
        <label htmlFor="file" className="cursoLabel">
          Curso 01
        </label>

        <div className="progress-bar">
          <progress className="progreso" id="file" max="100" value={cursos.curso01}>
            {cursos.curso01}
          </progress>
          <p className="porcentaje">{cursos.curso01}%</p>
        </div>
        <p className="fechaInscripcion">Fecha de inscripcion: {inscripcion} </p>
      </div>
      <div className="progress">
        <label htmlFor="file" className="cursoLabel">
          Curso 02
        </label>
        <div className="progress-bar">
          <progress className="progreso" id="file" max="100" value={cursos.curso02}>
            {cursos.curso02}
          </progress>
          <p className="porcentaje">{cursos.curso02}%</p>
        </div>
        <p className="fechaInscripcion">Fecha de inscripcion: {inscripcion} </p>
      </div>

      <div className="progress">
        <label htmlFor="file" className="cursoLabel">
          Curso 03
        </label>
        <div className="progress-bar">
          <progress className="progreso" id="file" max="100" value={cursos.curso03}>
            {cursos.curso03}
          </progress>
          <p className="porcentaje">{cursos.curso03}%</p>
        </div>
        <p className="fechaInscripcion">Fecha de inscripcion: {inscripcion} </p>
      </div>

      <div className="progress">
        <label htmlFor="file" className="cursoLabel">
          Curso 04
        </label>
        <div className="progress-bar">
          <progress className="progreso" id="file" max="100" value={cursos.curso04}>
            {cursos.curso04}
          </progress>
          <p className="porcentaje">{cursos.curso04}%</p>
        </div>
        <p className="fechaInscripcion">Fecha de inscripcion: {inscripcion} </p>
      </div>

      <div className="progressLast">
        <label htmlFor="file" className="cursoLabel">
          Curso 05
        </label>
        <div className="progress-bar">
          <progress className="progreso" id="file" max="100" value={cursos.curso05}>
            {cursos.curso05}
          </progress>
          <p className="porcentaje">{cursos.curso05}%</p>
        </div>
        <p className="fechaInscripcion">Fecha de inscripcion: {inscripcion} </p>
      </div>
    </>
  );
};

export default ModalInfo2;
