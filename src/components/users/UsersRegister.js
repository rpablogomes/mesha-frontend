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
        action="http://localhost:8080/users"
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
            name="surname"
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

export default UsersRegister;