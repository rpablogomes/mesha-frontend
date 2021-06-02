import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function UsersRegister() {
  return (
    <>
      <Header />
      <form
        className="Form"
        method="POST"
        action="http://localhost:8080/procedures"
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
          <label htmlFor="surname">descrição</label>
          <input
            className="fieldForm"
            type="text"
            name="name"
            required
          />
          </div>
        <div className="field">
          <label htmlFor="surname">Valor</label>
          <input className="fieldForm" type="number" min="0.00" max="10000.00" step="0.01" />
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

export default UsersRegister;
