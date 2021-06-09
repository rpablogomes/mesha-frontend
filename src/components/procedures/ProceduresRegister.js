import React, { useState, useEffect } from "react";

import Header from "../Header";
import Footer from "../Footer";

const axios = require("axios");

function UsersRegister() {
  const [doctors, setDoctors] = useState([]);

  function getDoctors() {
    axios.get("http://localhost:8080/doctors").then((response) => {
      setDoctors(response.data.body);
    });
  }

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
      <Header />
      <form
        className="Form"
        method="POST"
        action="http://localhost:8080/procedures"
      >
        <label htmlFor="name">Nome</label>
        <div className="field">
          <input className="fieldForm" type="text" name="name" required />
        </div>

        <label htmlFor="surname">Descrição</label>
        <div className="field">
          <input
            className="fieldForm"
            type="text"
            name="description"
            required
          />
        </div>
        <label htmlFor="user">Doutor</label>
        <div className="field">
          <select
            className="fieldForm"
            style={{ width: 422 }}
            type="text"
            name="doctorId"
            required
          >
            <option hidden />
            {doctors.map((doctor) => (
              <option value={doctor.id}>
                {doctor.name} {doctor.surname}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="value">Valor</label>
        <div className="field">
          <input
            className="fieldForm"
            name="value"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
          />
        </div>
        <button className="send" type="submit" id="button" value="Enviar">
          Salvar
        </button>
      </form>
      <Footer />
    </>
  );
}

export default UsersRegister;
