import React from "react";
import { camionetas } from "../Motos";
import "./camionetas.css";
import mainCamioneta from "../../imags/main-camioneta.jpg";
const Camionetas = () => {
  return (
    <>
      <div className="main-camioneta--container">
        <div className="camioneta-container">
          <h1>CAMIONETAS</h1>
          <img src={mainCamioneta} alt="main-img" />
          <p>Foto de Kelson Downes en Pexels</p>
        </div>
        <div className="camioneta-group">
          {camionetas.map((camioneta, index) => {
            return (
              <div key={camioneta.id} className="aCamioneta">
                <h2>{camioneta.marca}</h2>
                <img src={camioneta.url} alt="" />
                <h4>{camioneta.Ref}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Camionetas;
