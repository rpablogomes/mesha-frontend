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
        <div className="field">
          <label htmlFor="name">Nome</label>
          <input
            className="fieldForm"
            type="text"
            name="name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="surname">Sobrenome</label>
          <input
            className="fieldForm"
            type="text"
            name="surmane"
            required
          />
        </div>
        <button
            className="send"
            type="submit"
            id="button"
            value="Enviar"
          >Salvar</button>
      </form>
      <Footer />
    </>
  );
}

export default DoctorsRegister;