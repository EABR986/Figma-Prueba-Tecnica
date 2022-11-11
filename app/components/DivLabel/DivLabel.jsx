import './DivLabel.css';

import React from 'react';

import ConexionLabel from '../ConexionLabel/ConexionLabel';
import Email from '../Email/Email';
import Movil from '../Movil/Movil';
import NombreLabel from '../NombreLabel/NombreLabel';
import Usuario from '../Usuario/Usuario';

const DivLabel = () => {
  return (
    <div className="label">
      <ConexionLabel />
      <NombreLabel />
      <Usuario />
      <Email />
      <Movil />
    </div>
  );
};

export default DivLabel;
