import React from "react";

import Header from "../Header";
import Footer from "../Footer";

function ProcedureList() {

  return (
    <>
      <Header />
      <div className="Search">
      <form
      className="FormSearch"
      method="GET"
      action="http://localhost:8080/users"
      >
      <input className="fieldFormSearch"/>
      <button
            className="send"
            type="submit"
            id="button"
            value="Enviar"
          >Pesquisar</button>
      </form>
      <table classname="table">
        <tr>
          <th classname="tableName">Nome</th>
          <th classname="tableName">Descrição</th>
          <th classname="tableName">Valor</th>
        </tr>
      </table>
      </div>
      <Footer />
    </>
  );
}

export default ProcedureList;