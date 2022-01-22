import React from "react";
import enduro from "../../data/catalogo-motos";
import "./Enduro.css";

const Enduro = () => {
  return (
    <>
      <div className="enduro-container">
        {enduro.map((moto) => (
          <div className="item-container" key={moto.id}>
            <img src={moto.img} alt={moto.ref} />
            <div className="description-container">
              <h2 className="ref">{moto.ref}</h2>
              <h4 className="price">$ {moto.price}</h4>
              <p>{moto.cc}</p>
              <p>Weight: {moto.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Enduro;
