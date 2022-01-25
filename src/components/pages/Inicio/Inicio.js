import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";
import Maps from "../../Map";
import Form from "../../../components/Form/Form";

export const Inicio = () => {
  return (
    <>
      <div className="container-inicio">
        <h1>TOMA EL CONTROL</h1>
      </div>
      <div className="container-info">
        <h2>Conoce Nuestros Productos</h2>
        <p>
          Tenemos una gran variedad de modelos en automoviles y accesorios para
          todo tipo de vehículos
        </p>
        <Link to="/automoviles" className="boton">
          Más Información
        </Link>
      </div>
      <div className="container-location">
        <h2>Nuestro Centro de Ventas</h2>
        <p>
          Estamos ubicados al occidente de la ciudad, lo que nos permite llegar
          a más personas con nuestro servicio
        </p>
        <Maps />
      </div>
      <div className="form-container">
        <Form />
      </div>
    </>
  );
};

// export default Inicio;
