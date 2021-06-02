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
        action="http://localhost:8080/customerServices"
      >
        <div className="field">
          <label htmlFor="name">Nome</label>
          <input
            className="fieldForm"
            type="text"
            name="user"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="procedures">Procedimentos</label>
          <input
            className="fieldForm"
            type="text"
            name="procedures"
            required
          />
        </div>
        <button
            className="send"
            type="submit"
            id="button"
          >Salvar</button>
      </form>
      <Footer />
    </>
  );
}

export default DoctorsRegister;