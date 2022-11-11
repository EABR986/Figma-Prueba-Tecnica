/* eslint-disable jsx-a11y/alt-text */
import './Base.css';

import React from 'react';

const Base = () => {
  return (
    <>
      <div className="baseNav">
        <img className="baseLogo" src="/Vectors/Logo.svg" alt="ucademy logo" />
        <button className="navBuscar">
          <img className="btnSearch" src="/Vectors/search.svg" />
          Buscar
        </button>
        <div className="navRight">
          <button className="navmessage">
            <img className="svgMessage" src="/Vectors/message.svg" />
          </button>
          <button className="navNotification">
            <img className="svgNotification" src="/Vectors/notification.png" />
          </button>
          <img className="svgVertical" src="/Vectors/vertical.png" />
          <button className="naUser">
            <img className="svgUser" src="/Vectors/user.png" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Base;
