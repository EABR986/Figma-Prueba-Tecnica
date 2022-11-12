/* eslint-disable react/jsx-key */
import './StudentCard.css';

import axios from 'axios';
import React, { useEffect } from 'react';

import InfoBtn from './CardLabel/InfoBtn';
import StudentConexionLabel from './CardLabel/StudentConexionLabel';
import StudentEmail from './CardLabel/StudentEmail';
import StudentMovil from './CardLabel/StudentMovil';
import StudentNombreLabel from './CardLabel/StudentNombreLabel';
import StudentUsuario from './CardLabel/StudentUsuario';

const StudentCard = () => {
  const [student, setStudent] = React.useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/estudiantes')
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {student.map((student) => (
        <div key={student.id} className="Studentlabel">
          <StudentConexionLabel student={student} />
          <StudentNombreLabel student={student} />
          <StudentUsuario student={student} />
          <StudentEmail student={student} />
          <StudentMovil student={student} />
          <InfoBtn student={student} />
        </div>
      ))}
    </>
  );
};

export default StudentCard;
