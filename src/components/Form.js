import React from "react";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [people, setPeople] = useState({ name: "", email: "" });
  const [formKey, setFormKey] = useState(5);
  const handleClick = (e) => {
    e.preventDefault();
    setFormKey(formKey + 1);
    console.log(people);
  };
  return (
    <div className="form-container">
      <div className="form-suscribe-title">
        <h2>¡Suscríbete!</h2>
        <p>Te enviaremos Noticias semanales</p>
      </div>
      <form key={formKey} action="">
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={(e) => setPeople({ ...people, email: e.target.value })}
          />
        </div>
        <div className="input-container">
          <label htmlFor="Nombre">Nombre: </label>
          <input
            type="text"
            placeholder="Nombre"
            id="Nombre"
            onChange={(e) => setPeople({ ...people, name: e.target.value })}
          />
        </div>
        <button className="suscribe-button" onClick={handleClick}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
