import React from "react";
import "./automoviles.css";
import { autos } from "../../Motos";
import mainAuto from "../../../imags/main-auto.jpg";

export const Automoviles = () => {
  return (
    <>
      <div className="main-auto--container">
        <div className="auto-container">
          <img src={mainAuto} alt="main-img" />
        </div>
        <div className="automoviles-group">
          {autos.map((auto, index) => {
            return (
              <div key={auto.id} className="aAuto">
                <h2>{auto.marca}</h2>
                <img src={auto.url} alt="" />
                <h4>{auto.Ref}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// export default Automoviles;
