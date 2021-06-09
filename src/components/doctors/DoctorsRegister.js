import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function DoctorsRegister() {
  return (
    <>
      <Header />
      <form
        className="Form"
        method="POST"
        action="http://localhost:8080/doctors"
      >
        <label htmlFor="name">Nome</label>
        <div className="field">
          <input className="fieldForm" type="text" name="name" required />
        </div>

        <label htmlFor="surname">Sobrenome</label>
        <div className="field">
          <input className="fieldForm" type="text" name="surname" required />
        </div>
        <button className="send" type="submit" id="button" value="Enviar">
          Salvar
        </button>
      </form>
      <Footer />
    </>
  );
}

export default DoctorsRegister;
