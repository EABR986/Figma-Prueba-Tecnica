import React from 'react';

const ModalInfo2 = (props) => {
  const { student, setPage } = props;
  const { cursos } = student;

  return (
    <>
      <button
        className="Perfil"
        onClick={() => {
          setPage(0);
        }}
      >
        Perfil
      </button>
      <button
        className="Cursos"
        onClick={() => {
          setPage(2);
        }}
      >
        Cursos
      </button>

      <label htmlFor="file">File progress:</label>

      <progress className="progreso" id="file" max="100" value={cursos.curso01}>
        {cursos.curso01}
      </progress>
      <progress className="progreso" id="file" max="100" value={cursos.curso02}>
        {cursos.curso02}
      </progress>
      <progress className="progreso" id="file" max="100" value={cursos.curso03}>
        {cursos.curso03}
      </progress>
      <progress className="progreso" id="file" max="100" value={cursos.curso04}>
        {cursos.curso04}
      </progress>
      <progress className="progreso" id="file" max="100" value={cursos.curso05}>
        {cursos.curso05}
      </progress>
    </>
  );
};

export default ModalInfo2;
