import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function UsersRegister() {
  return (
    <>
      <Header />
      <form className="Form" method="POST" action="http://localhost:8080/users">
        <label htmlFor="name">Nome</label>
        <div className="field">
          <input className="fieldForm" type="text" name="name" required />
        </div>
        <label htmlFor="name">Sobrenome</label>
        <div className="field">
          <input className="fieldForm" type="text" name="surname" required />
        </div>
        <button className="send" type="submit">
          Salvar
        </button>
      </form>
      <Footer />
    </>
  );
}

export default UsersRegister;
